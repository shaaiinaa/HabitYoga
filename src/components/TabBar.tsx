import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface TabBarProps {
  activeTab: string;
  onTabPress: (tab: string) => void;
}

export function TabBar({activeTab, onTabPress}: TabBarProps) {
  const tabs = ['PDFs', 'VIDEOS', 'FAQs'];

  return (
    <View style={styles.container}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, activeTab === tab && styles.activeTab]}
          onPress={() => onTabPress(tab)}>
          <Text
            style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#E5F6F6',
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#006D77',
    borderRadius: 4,
  },
  tabText: {
    fontSize: 14,
    color: '#006D77',
  },
  activeTabText: {
    color: '#fff',
  },
});
