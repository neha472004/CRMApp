import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert(
        'Missing information',
        'Please fill in all fields.'
      );
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert(
        'Password mismatch',
        'Passwords do not match.'
      );
      return;
    }

    Alert.alert(
      'Account Created',
      `Welcome ${name}! Your account has been created.`,
      [
        {
          text: 'OK',
          onPress: () => router.back(),
        },
      ]
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>
            ← Back
          </Text>
        </TouchableOpacity>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>
            CRM
          </Text>

          <Text style={styles.title}>
            Create Account
          </Text>

          <Text style={styles.subtitle}>
            Create your CRM account
          </Text>
        </View>

        {/* Form */}
        <View style={styles.form}>

          {/* Name */}
          <Text style={styles.label}>
            Name
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#999"
            value={name}
            onChangeText={setName}
          />

          {/* Email */}
          <Text style={styles.label}>
            Email
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* Password */}
          <Text style={styles.label}>
            Password
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {/* Confirm Password */}
          <Text style={styles.label}>
            Confirm Password
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            placeholderTextColor="#999"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />

          {/* Create Account Button */}
          <TouchableOpacity
            style={styles.registerButton}
            onPress={handleRegister}
            activeOpacity={0.7}
          >
            <Text style={styles.registerButtonText}>
              CREATE ACCOUNT
            </Text>
          </TouchableOpacity>

          {/* Login */}
          <TouchableOpacity
            onPress={() => router.back()}
            activeOpacity={0.7}
          >
            <Text style={styles.loginText}>
              Already have an account? Login
            </Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FC',
  },

  content: {
    flexGrow: 1,
    paddingHorizontal: 40,
    paddingVertical: 50,
  },

  backButton: {
    marginBottom: 20,
  },

  backText: {
    fontSize: 18,
    color: '#2864E8',
    fontWeight: '600',
  },

  header: {
    alignItems: 'center',
    marginBottom: 30,
  },

  logo: {
    fontSize: 42,
    fontWeight: '800',
    color: '#2864E8',
    marginBottom: 15,
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#141B2D',
  },

  subtitle: {
    fontSize: 17,
    color: '#6F7785',
    marginTop: 8,
    textAlign: 'center',
  },

  form: {
    width: '100%',
  },

  label: {
    fontSize: 17,
    fontWeight: '600',
    color: '#303A4D',
    marginBottom: 8,
    marginTop: 15,
  },

  input: {
    height: 56,
    borderWidth: 1,
    borderColor: '#D5D9E2',
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 18,
    fontSize: 16,
    color: '#141B2D',
  },

  registerButton: {
    height: 60,
    backgroundColor: '#2864E8',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },

  loginText: {
    textAlign: 'center',
    color: '#2864E8',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 22,
  },
});