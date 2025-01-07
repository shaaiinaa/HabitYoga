import React, {useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Header} from '../components/Header';
import {TabBar} from '../components/TabBar';
import {ResourceCard} from '../components/ResourceCard';
import {BottomNav} from '../components/BottomNav';

const resources = [
  {
    title: 'Yoga Handbook',
    subtitle: '55+ ASANAS',
    description: 'Achieve greater flexibility and reduce body pain.',
    image: require('../images/Yoga_Handbook_thumbnail.png'),
    isLocked: false,
  },
  {
    title: 'Pranayama Handbook',
    subtitle: '10 PRANAYAMS',
    description:
      'Breathe better to boost immunity and improve your lung capacity.',
    image: require('../images/0.jpg'),
    friendsToUnlock: 1,
  },
  {
    title: 'Know your Prakriti',
    subtitle: '3 PRAKRITI',
    description:
      "Discover personalized wellness strategies based on your body's nature.",
    image: require('../images/2y.png'),
    friendsToUnlock: 1,
  },
  // Add more resources as needed
];

export default function ResourcesScreen({navigation}) {
  const [activeTab, setActiveTab] = useState('PDFs');

  return (
    <View style={styles.container}>
      <Header />
      <TabBar activeTab={activeTab} onTabPress={setActiveTab} />
      <ScrollView style={styles.content}>
        {resources.map((resource, index) => (
          <ResourceCard key={index} {...resource} />
        ))}
      </ScrollView>
      <BottomNav navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
  },
});
