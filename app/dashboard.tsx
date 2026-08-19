import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>
              CRM
            </Text>

            <Text style={styles.greeting}>
              Good morning 👋
            </Text>
          </View>

          <View style={styles.profileCircle}>
            <Text style={styles.profileText}>
              N
            </Text>
          </View>
        </View>

        {/* Dashboard Title */}
        <Text style={styles.dashboardTitle}>
          Dashboard
        </Text>

        {/* First Row of Statistics */}
        <View style={styles.statsContainer}>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>
              25
            </Text>

            <Text style={styles.statLabel}>
              Customers
            </Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>
              12
            </Text>

            <Text style={styles.statLabel}>
              Leads
            </Text>
          </View>

        </View>

        {/* Second Row of Statistics */}
        <View style={styles.statsContainer}>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>
              8
            </Text>

            <Text style={styles.statLabel}>
              Follow-ups
            </Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>
              5
            </Text>

            <Text style={styles.statLabel}>
              Deals
            </Text>
          </View>

        </View>

        {/* Recent Customers */}
        <Text style={styles.sectionTitle}>
          Recent Customers
        </Text>

        {/* Customer 1 */}
        <View style={styles.customerCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              R
            </Text>
          </View>

          <View style={styles.customerInfo}>
            <Text style={styles.customerName}>
              Rahul Sharma
            </Text>

            <Text style={styles.customerEmail}>
              rahul@example.com
            </Text>
          </View>
        </View>

        {/* Customer 2 */}
        <View style={styles.customerCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              P
            </Text>
          </View>

          <View style={styles.customerInfo}>
            <Text style={styles.customerName}>
              Priya Singh
            </Text>

            <Text style={styles.customerEmail}>
              priya@example.com
            </Text>
          </View>
        </View>

        {/* Customer 3 */}
        <View style={styles.customerCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              A
            </Text>
          </View>

          <View style={styles.customerInfo}>
            <Text style={styles.customerName}>
              Amit Kumar
            </Text>

            <Text style={styles.customerEmail}>
              amit@example.com
            </Text>
          </View>
        </View>

        {/* Add Customer Button */}
        <TouchableOpacity
          style={styles.addButton}
          activeOpacity={0.7}
        >
          <Text style={styles.addButtonText}>
            + Add Customer
          </Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FC',
  },

  content: {
    padding: 25,
    paddingTop: 60,
    paddingBottom: 40,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logo: {
    fontSize: 26,
    fontWeight: '800',
    color: '#2864E8',
  },

  greeting: {
    fontSize: 16,
    color: '#6F7785',
    marginTop: 5,
  },

  profileCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#2864E8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },

  dashboardTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#141B2D',
    marginTop: 30,
    marginBottom: 20,
  },

  statsContainer: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 15,
  },

  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
    minHeight: 120,
    justifyContent: 'center',
  },

  statNumber: {
    fontSize: 32,
    fontWeight: '800',
    color: '#2864E8',
  },

  statLabel: {
    fontSize: 15,
    color: '#6F7785',
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#141B2D',
    marginTop: 25,
    marginBottom: 15,
  },

  customerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E8EEFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    fontSize: 19,
    fontWeight: '700',
    color: '#2864E8',
  },

  customerInfo: {
    marginLeft: 15,
  },

  customerName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#141B2D',
  },

  customerEmail: {
    fontSize: 14,
    color: '#6F7785',
    marginTop: 4,
  },

  addButton: {
    height: 58,
    backgroundColor: '#2864E8',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  addButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
});