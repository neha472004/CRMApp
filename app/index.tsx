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

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 const handleLogin = () => {
  if (!email || !password) {
    Alert.alert(
      'Missing information',
      'Please enter your email and password.'
    );
    return;
  }

  router.push('/dashboard');
};
  const handleCreateAccount = () => {
    router.push('/register');
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
        <View style={styles.header}>
          <Text style={styles.logo}>CRM</Text>

          <Text style={styles.title}>
            Welcome Back
          </Text>

          <Text style={styles.subtitle}>
            Login to manage your customers
          </Text>
        </View>

        <View style={styles.form}>
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

          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
          >
            <Text style={styles.loginButtonText}>
              LOGIN
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.createAccountButton}
            onPress={handleCreateAccount}
            activeOpacity={0.7}
          >
            <Text style={styles.createAccount}>
              Create an account
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
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingVertical: 50,
  },

  header: {
    alignItems: 'center',
    marginBottom: 60,
  },

  logo: {
    fontSize: 48,
    fontWeight: '800',
    color: '#2864E8',
    marginBottom: 20,
  },

  title: {
    fontSize: 36,
    fontWeight: '700',
    color: '#141B2D',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    color: '#6F7785',
    textAlign: 'center',
  },

  form: {
    width: '100%',
  },

  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#303A4D',
    marginBottom: 10,
    marginTop: 20,
  },

  input: {
    height: 58,
    borderWidth: 1,
    borderColor: '#D5D9E2',
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 18,
    fontSize: 17,
    color: '#141B2D',
  },

  loginButton: {
    height: 60,
    backgroundColor: '#2864E8',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },

  createAccountButton: {
    alignItems: 'center',
    paddingVertical: 15,
  },

  createAccount: {
    textAlign: 'center',
    color: '#2864E8',
    fontSize: 17,
    fontWeight: '600',
    marginTop: 10,
  },
});