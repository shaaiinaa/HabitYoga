import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

// Define TypeScript interfaces
interface BatchTime {
  time: string;
}

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

const morningSlots: BatchTime[] = [
  {time: '6:30 AM'},
  {time: '7:30 AM'},
  {time: '8:30 AM'},
];

const eveningSlots: BatchTime[] = [
  {time: '5:00 PM'},
  {time: '6:00 PM'},
  {time: '7:00 PM'},
];

const benefits: Benefit[] = [
  {
    icon: '🔥',
    title: 'Burn Fat',
    description: 'Get fit and healthy',
  },
  {
    icon: '🧘',
    title: 'Be Calm',
    description: 'Reduce stress',
  },
  {
    icon: '💪',
    title: 'Become Flexible',
    description: 'Improve mobility',
  },
];

export default function HomeScreen({navigation}: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={styles.tag}>21 DAY ONLINE</Text>
          <Text style={styles.mainTitle}>FREE YOGA</Text>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>Starts Monday, 6th JAN</Text>
          </View>
          {/* <Text style={styles.instructorName}>SAURABH BOTHRA</Text>
          <Text style={styles.credentials}>Govt Certified Yoga Teacher</Text>
          <Text style={styles.experience}>IIT Graduate | 12+ Years Exp.</Text> */}
          <Image
            source={require('../images/yoga.png')}
            style={styles.mainPicture}
          />
        </View>

        {/* Registration Form */}
        <View style={styles.formSection}>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Name"
            placeholderTextColor="#666"
          />
          <View style={styles.phoneInput}>
            <View style={styles.countryCode}>
              <Text>+91</Text>
            </View>
            <TextInput
              style={styles.phoneNumber}
              placeholder="WhatsApp Number"
              placeholderTextColor="#666"
              keyboardType="numeric"
            />
          </View>

          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => navigation.navigate('Referral')}>
            <Text style={styles.buttonText}>Register Now for FREE →</Text>
          </TouchableOpacity>
          <Text style={styles.attendees}>71,81,360+ already attended</Text>
        </View>

        {/* Benefits Icons */}
        <View style={styles.benefitsSection}>
          {benefits.map((benefit, index) => (
            <View key={index} style={styles.benefitItem}>
              <Text style={styles.benefitIcon}>{benefit.icon}</Text>
              <Text style={styles.benefitTitle}>{benefit.title}</Text>
            </View>
          ))}
        </View>

        {/* Batch Times */}
        <View style={styles.batchSection}>
          <Text style={styles.sectionTitle}>Flexible Batch Times</Text>
          <Text style={styles.batchSubtitle}>
            45min classes, Indian Standard Time
          </Text>
          <View style={styles.timingsContainer}>
            <View style={styles.timeSlot}>
              <Text style={styles.slotTitle}>Morning Slot</Text>
              {morningSlots.map((slot, index) => (
                <Text key={index} style={styles.timeText}>
                  {slot.time}
                </Text>
              ))}
            </View>
            <View style={styles.timeSlot}>
              <Text style={styles.slotTitle}>Evening Slot</Text>
              {eveningSlots.map((slot, index) => (
                <Text key={index} style={styles.timeText}>
                  {slot.time}
                </Text>
              ))}
            </View>
          </View>
        </View>

        {/* Trust Section */}
        <View style={styles.trustSection}>
          <Text style={styles.welcomeText}>Welcome to Habuild</Text>
          <Text style={styles.trustTitle}>Trusted by Members Country-wide</Text>
          <Text style={styles.trustDescription}>
            We blend the best of old-school knowledge with modern tricks to help
            you form long-lasting healthy habits.
          </Text>
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>60 Lakhs +</Text>
              <Text style={styles.statLabel}>Community Members</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>12 +</Text>
              <Text style={styles.statLabel}>Years of Experience</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>4.9/5</Text>
              <Text style={styles.statLabel}>Google Rating</Text>
            </View>
          </View>
        </View>

        {/* World Record Section */}
        <View style={styles.worldRecordSection}>
          <Text style={styles.recordTitle}>
            World Record Created on 21st June,2024
          </Text>
          <Text style={styles.recordSubtitle}>Biggest ONLINE YOGA Session</Text>
          <Text style={styles.recordNumber}>
            5,99,162 people attended LIVE together in a day
          </Text>
        </View>

        {/* Benefits Section */}
        <View style={styles.inclusionSection}>
          <Text style={styles.inclusionTitle}>WHAT'S INCLUDED?</Text>
          <Text style={styles.inclusionSubtitle}>
            Unlock Your Exclusive Benefits
          </Text>
          <View style={styles.benefitsList}>
            <View style={styles.benefitCard}>
              <Text style={styles.benefitCardTitle}>
                Accountability Support
              </Text>
              <Text style={styles.benefitCardDesc}>
                Stay on track with regular check-ins and guidance to ensure you
                meet your wellness goals.
              </Text>
            </View>
            <View style={styles.benefitCard}>
              <Text style={styles.benefitCardTitle}>Flexible Timings</Text>
              <Text style={styles.benefitCardDesc}>
                Choose from various time slots to fit yoga seamlessly into your
                schedule.
              </Text>
            </View>
            <View style={styles.benefitCard}>
              <Text style={styles.benefitCardTitle}>Easy Accessibility</Text>
              <Text style={styles.benefitCardDesc}>
                Join sessions anytime, anywhere, with simple access across
                devices.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heroSection: {
    padding: 20,
    alignItems: 'center',
  },
  mainPicture: {
    width: 400,
    height: 300,
    resizeMode: 'contain',
  },
  tag: {
    backgroundColor: '#FFE4D6',
    padding: 8,
    borderRadius: 20,
    color: '#FF5722',
    fontSize: 16,
    fontWeight: '600',
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#000',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  dateText: {
    fontSize: 16,
    color: '#000',
  },
  heroImage: {
    width: '100%',
    height: 300,
    borderRadius: 20,
    marginVertical: 20,
  },
  instructorName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  credentials: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  experience: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  formSection: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
  },
  phoneInput: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  countryCode: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 8,
    marginRight: 10,
  },
  phoneNumber: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  attendees: {
    textAlign: 'center',
    marginTop: 10,
    color: '#666',
  },
  benefitsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  benefitItem: {
    alignItems: 'center',
  },
  benefitIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  benefitTitle: {
    fontSize: 14,
    color: '#000',
  },
  batchSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  batchSubtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  timingsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeSlot: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    width: '48%',
  },
  slotTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  timeText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  trustSection: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  welcomeText: {
    fontSize: 16,
    color: '#FF5722',
    marginBottom: 5,
  },
  trustTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  trustDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    lineHeight: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  worldRecordSection: {
    padding: 20,
    backgroundColor: '#fff',
  },
  recordTitle: {
    fontSize: 16,
    color: '#FF5722',
    marginBottom: 10,
  },
  recordSubtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  recordNumber: {
    fontSize: 16,
    color: '#666',
  },
  inclusionSection: {
    padding: 20,
  },
  inclusionTitle: {
    fontSize: 16,
    color: '#FF5722',
    marginBottom: 5,
  },
  inclusionSubtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  benefitsList: {
    gap: 15,
  },
  benefitCard: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
  },
  benefitCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  benefitCardDesc: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});
