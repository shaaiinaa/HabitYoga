// import React from 'react';
// import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
// import {Home, BookOpen, Users, BarChart} from 'lucide-react-native';
// import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

// type Props = {
//   navigation: NativeStackNavigationProp<any>;
// };
// export function BottomNav({navigation}) {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={styles.tab}
//         onPress={() => navigation.navigate('Referral')}>
//         <Home size={24} color="#666" />
//         <Text style={styles.label}>Home</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[styles.tab, styles.active]}
//         onPress={() => navigation.navigate('Resources')}>
//         <BookOpen size={24} color="#006D77" />
//         <Text style={[styles.label, styles.activeLabel]}>Resources</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.tab}
//         onPress={() => navigation.navigate('MyRef')}>
//         <Users size={24} color="#666" />
//         <Text style={styles.label}>My Referral</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.tab}
//         onPress={() => navigation.navigate('LeaderBoard')}>
//         <BarChart size={24} color="#666" />
//         <Text style={styles.label}>Leaderboard</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     borderTopWidth: 1,
//     borderTopColor: '#e0e0e0',
//     paddingBottom: 20,
//   },
//   tab: {
//     flex: 1,
//     alignItems: 'center',
//     paddingVertical: 8,
//   },
//   active: {
//     borderTopWidth: 2,
//     borderTopColor: '#006D77',
//   },
//   label: {
//     fontSize: 12,
//     color: '#666',
//     marginTop: 4,
//   },
//   activeLabel: {
//     color: '#006D77',
//   },
// });
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Home, BookOpen, Users, BarChart} from 'lucide-react-native';
import {useTab} from '../TabContext'; // Import the custom hook
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

export function BottomNav({navigation}: Props) {
  const {activeTab, setActiveTab} = useTab(); // Use the context

  const handleNavigation = (screen: string) => {
    setActiveTab(screen);
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Referral' && styles.active]}
        onPress={() => handleNavigation('Referral')}>
        <Home size={24} color={activeTab === 'Referral' ? '#006D77' : '#666'} />
        <Text
          style={[
            styles.label,
            activeTab === 'Referral' && styles.activeLabel,
          ]}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tab, activeTab === 'Resources' && styles.active]}
        onPress={() => handleNavigation('Resources')}>
        <BookOpen
          size={24}
          color={activeTab === 'Resources' ? '#006D77' : '#666'}
        />
        <Text
          style={[
            styles.label,
            activeTab === 'Resources' && styles.activeLabel,
          ]}>
          Resources
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tab, activeTab === 'MyRef' && styles.active]}
        onPress={() => handleNavigation('MyRef')}>
        <Users size={24} color={activeTab === 'MyRef' ? '#006D77' : '#666'} />
        <Text
          style={[styles.label, activeTab === 'MyRef' && styles.activeLabel]}>
          My Referral
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tab, activeTab === 'LeaderBoard' && styles.active]}
        onPress={() => handleNavigation('LeaderBoard')}>
        <BarChart
          size={24}
          color={activeTab === 'LeaderBoard' ? '#006D77' : '#666'}
        />
        <Text
          style={[
            styles.label,
            activeTab === 'LeaderBoard' && styles.activeLabel,
          ]}>
          Leaderboard
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingBottom: 20,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  active: {
    borderTopWidth: 2,
    borderTopColor: '#006D77',
  },
  label: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  activeLabel: {
    color: '#006D77',
  },
});
