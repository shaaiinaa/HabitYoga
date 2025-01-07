// // import {BottomNav} from '../components/BottomNav';
// // import React from 'react';
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   TouchableOpacity,
// //   Image,
// //   Clipboard,
// //   ScrollView,
// // } from 'react-native';
// // // import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// // import {Home, BookOpen, Users, BarChart} from 'lucide-react-native';

// // const MyReferral = ({navigation, ...rest}) => {
// //   //   console.log('hi-----------', navigation, rest);
// //   const referralLink = 'https://habit.yoga/shaina_nn1wr';

// //   const copyToClipboard = () => {
// //     Clipboard.setString(referralLink);
// //     // Add toast or alert to show copied message
// //   };

// //   return (
// //     <ScrollView style={styles.container}>
// //       {/* Header */}
// //       <View style={styles.header}>
// //         <Text style={styles.nameText}>Namaste{'\n'}Shaina... ji</Text>
// //         <View style={styles.karmaContainer}>
// //           <Text style={styles.karmaNumber}>10061</Text>
// //           <Text style={styles.karmaText}>My Rank</Text>
// //           <Text style={styles.karmaPoints}>0 Karma Points</Text>
// //         </View>
// //       </View>

// //       {/* Share Section */}
// //       <View style={styles.shareCard}>
// //         <Text style={styles.shareTitle}>
// //           Share & Win upto 12 Months{'\n'}of Yoga Vouchers.
// //         </Text>
// //         <TouchableOpacity style={styles.learnMore}>
// //           <Text style={styles.learnMoreText}>Learn More</Text>
// //         </TouchableOpacity>

// //         {/* Link Section */}
// //         <View style={styles.linkContainer}>
// //           <Text style={styles.link}>{referralLink}</Text>
// //           <TouchableOpacity onPress={copyToClipboard}>
// //             <Text style={styles.copyText}>Copy</Text>
// //           </TouchableOpacity>
// //         </View>

// //         {/* Share Buttons */}
// //         <View style={styles.buttonContainer}>
// //           <TouchableOpacity style={styles.waStoryButton}>
// //             <Text style={styles.buttonText}>WA Story</Text>
// //           </TouchableOpacity>
// //           <TouchableOpacity style={styles.whatsappButton}>
// //             <Text style={styles.buttonText}>Share On WhatsApp</Text>
// //           </TouchableOpacity>
// //         </View>

// //         {/* How to Refer Section */}
// //         <View style={styles.referralSteps}>
// //           <Text style={styles.referralTitle}>How to Refer ?</Text>
// //           <View style={styles.step}>
// //             {/* <Image
// //               source={require('./assets/share-icon.png')}
// //               style={styles.stepIcon}
// //             /> */}
// //             <Text style={styles.stepText}>
// //               Click on "Share on WhatsApp" above to Generate your customised
// //               link
// //             </Text>
// //           </View>
// //           <View style={styles.step}>
// //             {/* <Image
// //               source={require('./assets/friends-icon.png')}
// //               style={styles.stepIcon}
// //             /> */}
// //             <Text style={styles.stepText}>
// //               Share it with your Friends / Family members
// //             </Text>
// //           </View>
// //           <View style={styles.step}>
// //             {/* <Image
// //               source={require('./assets/karma-icon.png')}
// //               style={styles.stepIcon}
// //             /> */}
// //             <Text style={styles.stepText}>
// //               Earn Karma Points(KP) when they join through your link and earn
// //               gifts
// //             </Text>
// //           </View>
// //         </View>
// //       </View>

// //       {/* Referral List Section */}
// //       <View style={styles.referralList}>
// //         <Text style={styles.referralListText}>
// //           Your list of referrals will appear here.
// //         </Text>
// //         <TouchableOpacity style={styles.inviteButton}>
// //           <Text style={styles.inviteButtonText}>
// //             Invite Your Friends and Family
// //           </Text>
// //         </TouchableOpacity>
// //         <Text style={styles.karmaNote}>
// //           You Earn 10 Karma Point for every referral joining.
// //         </Text>
// //       </View>
// //       <BottomNav navigation={navigation} />
// //     </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#f5f5f5',
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     padding: 16,
// //     backgroundColor: '#fff',
// //   },
// //   nameText: {
// //     fontSize: 16,
// //     fontWeight: '600',
// //   },
// //   karmaContainer: {
// //     alignItems: 'flex-end',
// //   },
// //   karmaNumber: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //   },
// //   karmaText: {
// //     fontSize: 12,
// //     color: '#666',
// //   },
// //   karmaPoints: {
// //     fontSize: 12,
// //     color: '#666',
// //   },
// //   shareCard: {
// //     backgroundColor: '#e6f3ff',
// //     padding: 16,
// //     margin: 16,
// //     borderRadius: 8,
// //   },
// //   shareTitle: {
// //     fontSize: 16,
// //     fontWeight: '600',
// //     marginBottom: 8,
// //   },
// //   learnMore: {
// //     alignSelf: 'flex-start',
// //   },
// //   learnMoreText: {
// //     color: '#007AFF',
// //     fontSize: 14,
// //   },
// //   linkContainer: {
// //     flexDirection: 'row',
// //     backgroundColor: '#fff',
// //     padding: 12,
// //     borderRadius: 8,
// //     marginVertical: 16,
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //   },
// //   link: {
// //     flex: 1,
// //     fontSize: 14,
// //   },
// //   copyText: {
// //     color: '#007AFF',
// //     marginLeft: 8,
// //   },
// //   buttonContainer: {
// //     flexDirection: 'row',
// //     gap: 8,
// //   },
// //   waStoryButton: {
// //     flex: 1,
// //     backgroundColor: '#00C853',
// //     padding: 12,
// //     borderRadius: 8,
// //     alignItems: 'center',
// //   },
// //   whatsappButton: {
// //     flex: 2,
// //     backgroundColor: '#00C853',
// //     padding: 12,
// //     borderRadius: 8,
// //     alignItems: 'center',
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontWeight: '600',
// //   },
// //   referralSteps: {
// //     marginTop: 16,
// //   },
// //   referralTitle: {
// //     fontSize: 16,
// //     fontWeight: '600',
// //     marginBottom: 16,
// //   },
// //   step: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginBottom: 12,
// //   },
// //   stepIcon: {
// //     width: 24,
// //     height: 24,
// //     marginRight: 8,
// //   },
// //   stepText: {
// //     flex: 1,
// //     fontSize: 14,
// //   },
// //   referralList: {
// //     flex: 1,
// //     alignItems: 'center',
// //     padding: 16,
// //   },
// //   referralListText: {
// //     fontSize: 14,
// //     color: '#666',
// //     marginBottom: 16,
// //   },
// //   inviteButton: {
// //     backgroundColor: '#FFB300',
// //     paddingVertical: 12,
// //     paddingHorizontal: 24,
// //     borderRadius: 24,
// //     marginBottom: 16,
// //   },
// //   inviteButtonText: {
// //     color: '#000',
// //     fontWeight: '600',
// //   },
// //   karmaNote: {
// //     fontSize: 12,
// //     color: '#666',
// //   },
// // });

// // export default MyReferral;
// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Clipboard,
//   ScrollView,
//   ImageBackground,
// } from 'react-native';
// import {BottomNav} from '../components/BottomNav';

// const MyReferral = ({navigation}) => {
//   const referralLink = 'https://habit.yoga/shaina_nn1wr';

//   const copyToClipboard = () => {
//     Clipboard.setString(referralLink);
//     // Add a toast or alert to show copied message
//   };

//   return (
//     <ScrollView style={styles.container}>
//       {/* Header Section */}
//       <View style={styles.header}>
//         <Text style={styles.nameText}>Namaste{'\n'}Shaina... ji</Text>
//         <View style={styles.karmaContainer}>
//           <Text style={styles.karmaNumber}>10061</Text>
//           <Text style={styles.karmaText}>My Rank</Text>
//           <Text style={styles.karmaPoints}>0 Karma Points</Text>
//         </View>
//       </View>

//       {/* Share & Win Section */}
//       <View style={styles.shareCard}>
//         <Text style={styles.shareTitle}>
//           Share & Win upto 12 Months{'\n'}of Yoga Vouchers.
//         </Text>
//         <TouchableOpacity style={styles.learnMore}>
//           <Text style={styles.learnMoreText}>Learn More</Text>
//         </TouchableOpacity>

//         {/* Referral Link Section */}
//         <View style={styles.linkContainer}>
//           <Text style={styles.link}>{referralLink}</Text>
//           <TouchableOpacity onPress={copyToClipboard}>
//             <Text style={styles.copyText}>Copy</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Share Buttons */}
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.waStoryButton}>
//             <Text style={styles.buttonText}>WA Story</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.whatsappButton}>
//             <Text style={styles.buttonText}>Share On WhatsApp</Text>
//           </TouchableOpacity>
//         </View>

//         {/* How to Refer Section */}
//         <View style={styles.referralSteps}>
//           <Text style={styles.referralTitle}>How to Refer ?</Text>
//           <View style={styles.step}>
//             <Text style={styles.stepText}>
//               Click on "Share on WhatsApp" above to Generate your customised
//               link
//             </Text>
//           </View>
//           <View style={styles.step}>
//             <Text style={styles.stepText}>
//               Share it with your Friends / Family members
//             </Text>
//           </View>
//           <View style={styles.step}>
//             <Text style={styles.stepText}>
//               Earn Karma Points(KP) when they join through your link and earn
//               gifts
//             </Text>
//           </View>
//         </View>
//       </View>

//       {/* Referral List Section */}
//       <ImageBackground
//         source={require('../images/referral_2_bg.png')} // Replace with the correct path
//         style={styles.referralBackground}
//         resizeMode="cover">
//         <View style={styles.referralList}>
//           <Text style={styles.referralListText}>
//             Your list of referrals will appear here.
//           </Text>
//           <TouchableOpacity style={styles.inviteButton}>
//             <Text style={styles.inviteButtonText}>
//               Invite Your Friends and Family
//             </Text>
//           </TouchableOpacity>
//           <Text style={styles.karmaNote}>
//             You Earn 10 Karma Point for every referral joining.
//           </Text>
//         </View>
//       </ImageBackground>

//       <BottomNav navigation={navigation} />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   nameText: {
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   karmaContainer: {
//     alignItems: 'flex-end',
//   },
//   karmaNumber: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   karmaText: {
//     fontSize: 12,
//     color: '#666',
//   },
//   karmaPoints: {
//     fontSize: 12,
//     color: '#666',
//   },
//   shareCard: {
//     backgroundColor: '#e6f3ff',
//     padding: 16,
//     margin: 16,
//     borderRadius: 8,
//   },
//   shareTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 8,
//   },
//   learnMore: {
//     alignSelf: 'flex-start',
//   },
//   learnMoreText: {
//     color: '#007AFF',
//     fontSize: 14,
//   },
//   linkContainer: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     padding: 12,
//     borderRadius: 8,
//     marginVertical: 16,
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   link: {
//     flex: 1,
//     fontSize: 14,
//   },
//   copyText: {
//     color: '#007AFF',
//     marginLeft: 8,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     gap: 8,
//   },
//   waStoryButton: {
//     flex: 1,
//     backgroundColor: '#00C853',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   whatsappButton: {
//     flex: 2,
//     backgroundColor: '#00C853',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: '600',
//   },
//   referralSteps: {
//     marginTop: 16,
//   },
//   referralTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 16,
//   },
//   step: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   stepText: {
//     flex: 1,
//     fontSize: 14,
//   },
//   referralBackground: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//     height: 250, // Adjust height as necessary
//   },
//   referralList: {
//     backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly transparent white background
//     borderRadius: 12,
//     padding: 16,
//     alignItems: 'center',
//     marginHorizontal: 16,
//   },
//   referralListText: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 16,
//     textAlign: 'center',
//   },
//   inviteButton: {
//     backgroundColor: '#FFB300',
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     borderRadius: 24,
//     marginBottom: 16,
//   },
//   inviteButtonText: {
//     color: '#000',
//     fontWeight: '600',
//   },
//   karmaNote: {
//     fontSize: 12,
//     color: '#666',
//     textAlign: 'center',
//   },
// });

// export default MyReferral;
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Clipboard,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {BottomNav} from '../components/BottomNav';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

const MyReferral = ({navigation}: Props) => {
  const referralLink = 'https://habit.yoga/shaina_nn1wr';

  const copyToClipboard = () => {
    Clipboard.setString(referralLink);
    // Add a toast or alert to show copied message
  };

  return (
    <View style={styles.container}>
      {/* Scrollable Content */}
      <ScrollView style={styles.scrollView}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.nameText}>Namaste{'\n'}Shaina... ji</Text>
          <View style={styles.karmaContainer}>
            <Text style={styles.karmaNumber}>10061</Text>
            <Text style={styles.karmaText}>My Rank</Text>
            <Text style={styles.karmaPoints}>0 Karma Points</Text>
          </View>
        </View>

        {/* Share & Win Section */}
        <View style={styles.shareCard}>
          <Text style={styles.shareTitle}>
            Share & Win upto 12 Months{'\n'}of Yoga Vouchers.
          </Text>
          <TouchableOpacity style={styles.learnMore}>
            <Text style={styles.learnMoreText}>Learn More</Text>
          </TouchableOpacity>

          {/* Referral Link Section */}
          <View style={styles.linkContainer}>
            <Text style={styles.link}>{referralLink}</Text>
            <TouchableOpacity onPress={copyToClipboard}>
              <Text style={styles.copyText}>Copy</Text>
            </TouchableOpacity>
          </View>

          {/* Share Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.waStoryButton}>
              <Text style={styles.buttonText}>WA Story</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.whatsappButton}>
              <Text style={styles.buttonText}>Share On WhatsApp</Text>
            </TouchableOpacity>
          </View>

          {/* How to Refer Section */}
          <View style={styles.referralSteps}>
            <Text style={styles.referralTitle}>How to Refer ?</Text>
            <View style={styles.step}>
              <Text style={styles.stepText}>
                Click on "Share on WhatsApp" above to Generate your customised
                link
              </Text>
            </View>
            <View style={styles.step}>
              <Text style={styles.stepText}>
                Share it with your Friends / Family members
              </Text>
            </View>
            <View style={styles.step}>
              <Text style={styles.stepText}>
                Earn Karma Points(KP) when they join through your link and earn
                gifts
              </Text>
            </View>
          </View>
        </View>

        {/* Referral List Section */}
        <ImageBackground
          source={require('../images/referral_2_bg.png')} // Replace with the correct path
          style={styles.referralBackground}
          resizeMode="cover">
          <View style={styles.referralList}>
            <Text style={styles.referralListText}>
              Your list of referrals will appear here.
            </Text>
            <TouchableOpacity style={styles.inviteButton}>
              <Text style={styles.inviteButtonText}>
                Invite Your Friends and Family
              </Text>
            </TouchableOpacity>
            <Text style={styles.karmaNote}>
              You Earn 10 Karma Point for every referral joining.
            </Text>
          </View>
        </ImageBackground>
      </ScrollView>

      {/* Fixed Bottom Navigation */}
      <BottomNav navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'flex-end', // Ensure BottomNav stays at the bottom
  },
  scrollView: {
    flexGrow: 1, // Allows content to scroll freely
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
  },
  nameText: {
    fontSize: 16,
    fontWeight: '600',
  },
  karmaContainer: {
    alignItems: 'flex-end',
  },
  karmaNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  karmaText: {
    fontSize: 12,
    color: '#666',
  },
  karmaPoints: {
    fontSize: 12,
    color: '#666',
  },
  shareCard: {
    backgroundColor: '#e6f3ff',
    padding: 16,
    margin: 16,
    borderRadius: 8,
  },
  shareTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  learnMore: {
    alignSelf: 'flex-start',
  },
  learnMoreText: {
    color: '#007AFF',
    fontSize: 14,
  },
  linkContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginVertical: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  link: {
    flex: 1,
    fontSize: 14,
  },
  copyText: {
    color: '#007AFF',
    marginLeft: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  waStoryButton: {
    flex: 1,
    backgroundColor: '#00C853',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  whatsappButton: {
    flex: 2,
    backgroundColor: '#00C853',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  referralSteps: {
    marginTop: 16,
  },
  referralTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  stepText: {
    flex: 1,
    fontSize: 14,
  },
  referralBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 250, // Adjust height as necessary
  },
  referralList: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly transparent white background
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginHorizontal: 16,
  },
  referralListText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
    textAlign: 'center',
  },
  inviteButton: {
    backgroundColor: '#FFB300',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    marginBottom: 16,
  },
  inviteButtonText: {
    color: '#000',
    fontWeight: '600',
  },
  karmaNote: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});

export default MyReferral;
