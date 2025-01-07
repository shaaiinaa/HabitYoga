// import {Navigation} from 'lucide-react-native';
// import {BottomNav} from '../components/BottomNav';
// import React from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';

// const LeaderboardScreen = ({navigation}) => {
//   const leaderboardData = [
//     {rank: 1, name: 'president', id: '1012', points: 27440},
//     {rank: 2, name: 'Dr. Hemant', id: '8884', points: 8180},
//     {rank: 3, name: 'SB', id: '0109', points: 4370},
//     {rank: 4, name: 'Manoj Kumar', id: '6973', points: 4080},
//     {rank: 5, name: 'Yadvendra', id: '7121', points: 3980},
//     {rank: 6, name: 'Pradeep M', id: '9914', points: 3890},
//     {rank: 7, name: 'M v shesha', id: '8885', points: 3360},
//     {rank: 8, name: 'HARSH', id: '1948', points: 3230},
//     {rank: 9, name: 'Amar Anand', id: '0000', points: 3090},
//     {rank: 10, name: 'Chaitali A', id: '1234', points: 3070},
//     // Additional names as shown in the images
//     {rank: 11, name: 'Shahin M K', id: '8169', points: 3030},
//     {rank: 12, name: 'वासु समता', id: '7489', points: 2990},
//     {rank: 13, name: 'Dr. Rajesh', id: '0631', points: 2970},
//     // ... add more entries as needed
//   ];

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <View style={styles.userInfo}>
//           <Text style={styles.greeting}>Namaste</Text>
//           <Text style={styles.userName}>Shaina ji</Text>
//         </View>
//         <View style={styles.pointsContainer}>
//           <Text style={styles.points}>10061</Text>
//           <Text style={styles.pointsLabel}>Karma Points</Text>
//         </View>

//         {/* Leaderboard Info */}
//         <View style={styles.infoBox}>
//           <Text style={styles.infoText}>
//             Only Karma Points earned from Dec 2, 2024, onward will counted for
//             leaderboard
//           </Text>
//           <Text style={styles.infoText}>
//             Final ranks lock on Jan 22, 2025 - maintain your rank to hold onto
//             your reward!
//           </Text>
//         </View>

//         {/* Rewards Banner */}
//         <View style={styles.banner}>
//           <View style={styles.bannerContent}>
//             <View>
//               <Text style={styles.bannerTitle}>Top 10,000 Rankers will</Text>
//               <Text style={styles.bannerHighlight}>Win Exclusive Gifts!*</Text>
//               <Text style={styles.bannerSubtext}>
//                 Keep upgrading your rank.
//               </Text>
//             </View>
//             <TouchableOpacity style={styles.checkRewardsButton}>
//               <Text style={styles.buttonText}>Check Rewards</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Leaderboard */}
//         <View style={styles.leaderboardContainer}>
//           <View style={styles.tableHeader}>
//             <Text style={styles.headerRank}>Rank</Text>
//             <Text style={styles.headerName}>Name</Text>
//             <Text style={styles.headerPoints}>Points</Text>
//           </View>
//           <ScrollView>
//             {leaderboardData.map(item => (
//               <View
//                 key={item.rank}
//                 style={[
//                   styles.tableRow,
//                   item.rank <= 3 ? styles.topThree : null,
//                 ]}>
//                 <Text style={styles.rankText}>{item.rank}</Text>
//                 <View style={styles.nameContainer}>
//                   <Text style={styles.nameText}>{item.name}</Text>
//                   <Text style={styles.idText}>******{item.id}</Text>
//                 </View>
//                 <View style={styles.pointsWrapper}>
//                   <View style={styles.pointsDot} />
//                   <Text style={styles.pointsText}>{item.points} KP</Text>
//                 </View>
//               </View>
//             ))}
//           </ScrollView>
//         </View>

//       </View>
//       <BottomNav navigation={navigation} />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F6F8',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   userInfo: {
//     flex: 1,
//   },
//   greeting: {
//     fontSize: 14,
//     color: '#666',
//   },
//   userName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   pointsContainer: {
//     alignItems: 'flex-end',
//   },
//   points: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   pointsLabel: {
//     fontSize: 12,
//     color: '#666',
//   },
//   infoBox: {
//     backgroundColor: '#FFF9E6',
//     padding: 12,
//     margin: 16,
//     borderRadius: 8,
//   },
//   infoText: {
//     fontSize: 12,
//     color: '#666',
//     marginBottom: 4,
//   },
//   banner: {
//     backgroundColor: '#2196F3',
//     margin: 16,
//     borderRadius: 12,
//     padding: 16,
//   },
//   bannerContent: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   bannerTitle: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   bannerHighlight: {
//     color: '#FFD700',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   bannerSubtext: {
//     color: '#fff',
//     fontSize: 12,
//     marginTop: 4,
//   },
//   checkRewardsButton: {
//     backgroundColor: '#FFD700',
//     padding: 8,
//     borderRadius: 6,
//   },
//   buttonText: {
//     color: '#000',
//     fontWeight: 'bold',
//   },
//   leaderboardContainer: {
//     flex: 1,
//     backgroundColor: '#fff',
//     margin: 16,
//     borderRadius: 12,
//   },
//   tableHeader: {
//     flexDirection: 'row',
//     padding: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   headerRank: {
//     width: 50,
//     fontSize: 12,
//     color: '#666',
//   },
//   headerName: {
//     flex: 1,
//     fontSize: 12,
//     color: '#666',
//   },
//   headerPoints: {
//     width: 100,
//     fontSize: 12,
//     color: '#666',
//     textAlign: 'right',
//   },
//   tableRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   topThree: {
//     backgroundColor: '#FFF9E6',
//   },
//   rankText: {
//     width: 50,
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   nameContainer: {
//     flex: 1,
//   },
//   nameText: {
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   idText: {
//     fontSize: 12,
//     color: '#666',
//   },
//   pointsWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: 100,
//     justifyContent: 'flex-end',
//   },
//   pointsDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#4CAF50',
//     marginRight: 4,
//   },
//   pointsText: {
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   bottomNav: {
//     flexDirection: 'row',
//     borderTopWidth: 1,
//     borderTopColor: '#eee',
//     backgroundColor: '#fff',
//   },
//   navItem: {
//     flex: 1,
//     padding: 12,
//     alignItems: 'center',
//   },
//   activeNav: {
//     borderTopWidth: 2,
//     borderTopColor: '#2196F3',
//   },
//   activeNavText: {
//     color: '#2196F3',
//   },
// });

// export default LeaderboardScreen;
// import {Navigation} from 'lucide-react-native';
import {BottomNav} from '../components/BottomNav';
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

const LeaderboardScreen = ({navigation}: Props) => {
  const leaderboardData = [
    {rank: 1, name: 'president', id: '1012', points: 27440},
    {rank: 2, name: 'Dr. Hemant', id: '8884', points: 8180},
    {rank: 3, name: 'SB', id: '0109', points: 4370},
    {rank: 4, name: 'Manoj Kumar', id: '6973', points: 4080},
    {rank: 5, name: 'Yadvendra', id: '7121', points: 3980},
    {rank: 6, name: 'Pradeep M', id: '9914', points: 3890},
    {rank: 7, name: 'M v shesha', id: '8885', points: 3360},
    {rank: 8, name: 'HARSH', id: '1948', points: 3230},
    {rank: 9, name: 'Amar Anand', id: '0000', points: 3090},
    {rank: 10, name: 'Chaitali A', id: '1234', points: 3070},
    {rank: 11, name: 'Shahin M K', id: '8169', points: 3030},
    {rank: 12, name: 'वासु समता', id: '7489', points: 2990},
    {rank: 13, name: 'Dr. Rajesh', id: '0631', points: 2970},
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Text style={styles.greeting}>Namaste</Text>
          <Text style={styles.userName}>Shaina ji</Text>
        </View>
        <View style={styles.pointsContainer}>
          <Text style={styles.points}>10061</Text>
          <Text style={styles.pointsLabel}>Karma Points</Text>
        </View>
      </View>

      {/* Leaderboard Info */}
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          Only Karma Points earned from Dec 2, 2024, onward will be counted for
          the leaderboard.
        </Text>
        <Text style={styles.infoText}>
          Final ranks lock on Jan 22, 2025 - maintain your rank to hold onto
          your reward!
        </Text>
      </View>

      {/* Rewards Banner */}
      <View style={styles.banner}>
        <View style={styles.bannerContent}>
          <View>
            <Text style={styles.bannerTitle}>Top 10,000 Rankers will</Text>
            <Text style={styles.bannerHighlight}>Win Exclusive Gifts!*</Text>
            <Text style={styles.bannerSubtext}>Keep upgrading your rank.</Text>
          </View>
          <TouchableOpacity style={styles.checkRewardsButton}>
            <Text style={styles.buttonText}>Check Rewards</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Leaderboard */}
      <View style={styles.leaderboardContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.headerRank}>Rank</Text>
          <Text style={styles.headerName}>Name</Text>
          <Text style={styles.headerPoints}>Points</Text>
        </View>
        <ScrollView>
          {leaderboardData.map(item => (
            <View
              key={item.rank}
              style={[
                styles.tableRow,
                item.rank <= 3 ? styles.topThree : null,
              ]}>
              <Text style={styles.rankText}>{item.rank}</Text>
              <View style={styles.nameContainer}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.idText}>******{item.id}</Text>
              </View>
              <View style={styles.pointsWrapper}>
                <View style={styles.pointsDot} />
                <Text style={styles.pointsText}>{item.points} KP</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Bottom Navigation */}
      <BottomNav navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
  },
  userInfo: {
    flex: 1,
  },
  greeting: {
    fontSize: 14,
    color: '#666',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pointsContainer: {
    alignItems: 'flex-end',
  },
  points: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pointsLabel: {
    fontSize: 12,
    color: '#666',
  },
  infoBox: {
    backgroundColor: '#FFF9E6',
    padding: 12,
    margin: 16,
    borderRadius: 8,
  },
  infoText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  banner: {
    backgroundColor: '#2196F3',
    margin: 16,
    borderRadius: 12,
    padding: 16,
  },
  bannerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bannerTitle: {
    color: '#fff',
    fontSize: 16,
  },
  bannerHighlight: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bannerSubtext: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
  checkRewardsButton: {
    backgroundColor: '#FFD700',
    padding: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  leaderboardContainer: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 12,
  },
  tableHeader: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerRank: {
    width: 50,
    fontSize: 12,
    color: '#666',
  },
  headerName: {
    flex: 1,
    fontSize: 12,
    color: '#666',
  },
  headerPoints: {
    width: 100,
    fontSize: 12,
    color: '#666',
    textAlign: 'right',
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  topThree: {
    backgroundColor: '#FFF9E6',
  },
  rankText: {
    width: 50,
    fontSize: 14,
    fontWeight: 'bold',
  },
  nameContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 14,
    fontWeight: '500',
  },
  idText: {
    fontSize: 12,
    color: '#666',
  },
  pointsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    justifyContent: 'flex-end',
  },
  pointsDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4CAF50',
    marginRight: 4,
  },
  pointsText: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default LeaderboardScreen;
