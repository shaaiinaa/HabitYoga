import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Menu} from 'lucide-react-native';

export function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Menu size={24} color="#000" />
      </TouchableOpacity>
      <View>
        <Text style={styles.greeting}>Namaste</Text>
        <Text style={styles.name}>Shaina... ji</Text>
      </View>
      <View style={styles.stats}>
        <View>
          <Text style={styles.points}>10061</Text>
          <Text style={styles.label}>My Rank</Text>
        </View>
        <View style={styles.divider} />
        <View>
          <Text style={styles.points}>0</Text>
          <Text style={styles.label}>Karma Points</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  greeting: {
    fontSize: 14,
    color: '#666',
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 12,
  },
  stats: {
    flexDirection: 'row',
    marginLeft: 'auto',
    alignItems: 'center',
  },
  points: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  label: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 12,
  },
});
