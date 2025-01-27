'use client';

import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {
  // MessageCircle,
  Book,
  Users,
  Ticket,
  HeadphonesIcon,
  Bot,
  MessageSquare,
  Brain,
} from 'lucide-react';
import {ZohoDeskService} from '../services/zoho-desk';

export default function HelpCenter() {
  const buttons = [
    {
      // icon: MessageCircle,
      text: 'Open Home Screen',
      onPress: ZohoDeskService.openHomeScreen,
    },
    {
      icon: Book,
      text: 'Open Knowledge Base',
      onPress: ZohoDeskService.openKnowledgeBase,
    },
    {
      icon: Users,
      text: 'Open Community',
      onPress: ZohoDeskService.openCommunity,
    },
    {
      icon: Ticket,
      text: 'Open Tickets',
      onPress: ZohoDeskService.openTickets,
    },
    {
      icon: HeadphonesIcon,
      text: 'Open SalesIQ (Live Chat)',
      onPress: ZohoDeskService.openSalesIQ,
    },
    {
      icon: Bot,
      text: 'Open Guided Conversation',
      onPress: ZohoDeskService.openGuidedConversation,
    },
    {
      icon: MessageSquare,
      text: 'Open Business Messaging',
      onPress: ZohoDeskService.openBusinessMessaging,
    },
    {
      icon: Brain,
      text: 'Open Answer Bot',
      onPress: ZohoDeskService.openAnswerBot,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Help Center</Text>

        <View style={styles.buttonContainer}>
          {buttons.map((button, index) => {
            const Icon = button.icon;
            return (
              <TouchableOpacity
                key={index}
                style={styles.button}
                onPress={button.onPress}>
                {/* <Icon style={styles.icon} /> */}
                <Text style={styles.buttonText}>{button.text}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB', // gray-50 equivalent
    padding: 24,
  },
  card: {
    maxWidth: 400,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  buttonContainer: {
    gap: 12,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 12,
    backgroundColor: '#1F2937', // gray-800 equivalent
    borderRadius: 6,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  icon: {
    width: 16,
    height: 16,
    color: '#FFFFFF',
  },
});
