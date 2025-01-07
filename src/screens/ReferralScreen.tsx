import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Share,
  Clipboard,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
// import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomNav} from '../components/BottomNav';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};
export default function ReferralScreen({navigation}: Props) {
  const referralLink = 'https://habit.yoga/shaina_nn1wr';

  const shareOnWhatsApp = async () => {
    try {
      const message = `Join me on Yoga App! ${referralLink}`;
      await Share.share({
        message,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const copyToClipboard = () => {
    Clipboard.setString(referralLink);
    // You might want to show a toast message here
  };
  // const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          {/* <Image
            source={require('./assets/menu.png')}
            style={styles.menuIcon}
          /> */}
        </TouchableOpacity>
        <View>
          <Text style={styles.headerGreeting}>Namaste</Text>
          <Text style={styles.headerName}>Shaina... ji</Text>
        </View>
        <View style={styles.karmaContainer}>
          <Text style={styles.karmaPoints}>10061</Text>
          <Text style={styles.karmaLabel}>My Rank</Text>
          <Text style={styles.karmaPoints}>0</Text>
          <Text style={styles.karmaLabel}>Karma Points</Text>
        </View>
      </View>

      <ScrollView style={styles.content}>
        {/* Referral Rewards Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Referral Rewards</Text>
            <TouchableOpacity>
              <Text style={styles.seeRewards}>See Rewards</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.voucherCard}>
            <Text style={styles.voucherText}>
              Unlock your 🎁 7 day yoga voucher at just 1 referral!
            </Text>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={styles.progress} />
            </View>
            <View style={styles.levelContainer}>
              <Text style={styles.levelText}>Level 0</Text>
              <Text style={styles.kpText}>0 KP</Text>
            </View>
            <View style={styles.levelContainer}>
              <Text style={styles.levelText}>Level 1</Text>
              <Text style={styles.kpText}>10 KP</Text>
            </View>
          </View>

          <Text style={styles.giftText}>
            Get a 🎁 Suprise gift at Level 4 ⭐
          </Text>

          {/* Referral Link */}
          <View style={styles.linkContainer}>
            <Text style={styles.link}>{referralLink}</Text>
            <TouchableOpacity onPress={copyToClipboard}>
              <Text style={styles.copyButton}>📋 Copy</Text>
            </TouchableOpacity>
          </View>

          {/* Share Buttons */}
          <View style={styles.shareButtons}>
            <TouchableOpacity
              style={[styles.shareButton, styles.waStory]}
              onPress={shareOnWhatsApp}>
              <Text style={styles.shareButtonText}>📱 WA Story</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.shareButton, styles.whatsapp]}
              onPress={shareOnWhatsApp}>
              <Text style={styles.shareButtonText}>
                WhatsApp Share On WhatsApp
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* How to Refer Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How to Refer ?</Text>
          <View style={styles.stepContainer}>
            {/* <Image
              source={require('./assets/step1.png')}
              style={styles.stepIcon}
            /> */}
            <Text style={styles.stepText}>
              Click on "Share on WhatsApp" above to Generate your customised
              link
            </Text>
          </View>
          <View style={styles.stepContainer}>
            {/* <Image
              source={require('./assets/step2.png')}
              style={styles.stepIcon}
            /> */}
            <Text style={styles.stepText}>
              Share it with your Friends / Family members
            </Text>
          </View>
          <View style={styles.stepContainer}>
            {/* <Image
              source={require('./assets/step3.png')}
              style={styles.stepIcon}
            /> */}
            <Text style={styles.stepText}>
              Earn Karma Points(KP) when they join through your link and earn
              gifts
            </Text>
          </View>
        </View>

        {/* Quick Shortcuts */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Shortcuts</Text>
          <View style={styles.shortcutsGrid}>
            <TouchableOpacity style={styles.shortcutItem}>
              <Image
                source={require('../images/pdf.png')}
                style={styles.shortcutIcon}
              />
              {/* <Text style={styles.shortcutText}>Free PDF</Text> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.shortcutItem}>
              <Image
                source={require('../images/time.png')}
                style={styles.shortcutIcon}
              />
              {/* <Text style={styles.shortcutText}>Batch Timings</Text> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.shortcutItem}>
              <View style={styles.newBadge}>
                {/* <Text style={styles.newBadgeText}>NEW</Text> */}
              </View>
              <Image
                source={require('../images/youtube.png')}
                style={styles.shortcutIcon}
              />
              {/* <Text style={styles.shortcutText}>Join Class</Text> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.shortcutItem}>
              <View style={styles.newBadge}>
                {/* <Text style={styles.newBadgeText}>NEW</Text> */}
              </View>
              <Image
                source={require('../images/breathing_shortcut_thumbnail.png')}
                style={styles.shortcutIcon}
              />
              <Text style={styles.shortcutText}>Breathing Exercise</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <BottomNav navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuIcon: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  headerGreeting: {
    fontSize: 16,
    color: '#666',
  },
  headerName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  karmaContainer: {
    marginLeft: 'auto',
    alignItems: 'flex-end',
  },
  karmaPoints: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  karmaLabel: {
    fontSize: 12,
    color: '#666',
  },
  content: {
    flex: 1,
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeRewards: {
    color: '#007AFF',
    fontSize: 14,
  },
  voucherCard: {
    backgroundColor: '#FFF9E6',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  voucherText: {
    fontSize: 16,
  },
  progressContainer: {
    marginVertical: 16,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#eee',
    borderRadius: 4,
  },
  progress: {
    width: '0%',
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  levelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  levelText: {
    fontSize: 14,
    color: '#666',
  },
  kpText: {
    fontSize: 14,
    color: '#666',
  },
  giftText: {
    fontSize: 16,
    marginVertical: 16,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  link: {
    flex: 1,
    fontSize: 14,
  },
  copyButton: {
    marginLeft: 8,
    color: '#007AFF',
  },
  shareButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  shareButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  waStory: {
    backgroundColor: '#25D366',
  },
  whatsapp: {
    backgroundColor: '#25D366',
  },
  shareButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  stepIcon: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  stepText: {
    flex: 1,
    fontSize: 14,
    color: '#666',
  },
  shortcutsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginTop: 16,
  },
  // shortcutItem: {
  //   width: '45%',
  //   aspectRatio: 1,
  //   backgroundColor: '#f5f5f5',
  //   borderRadius: 8,
  //   padding: 16,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // shortcutIcon: {
  //   width: 32,
  //   height: 32,
  //   marginBottom: 8,
  // },
  shortcutItem: {
    width: '45%',
    aspectRatio: 1, // Ensures the item is square
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8, // Optional padding for spacing
  },

  shortcutIcon: {
    width: '70%', // Adjust based on desired size
    height: '70%',
    resizeMode: 'contain', // Ensures the image scales properly within the container
    alignSelf: 'center',
  },
  shortcutText: {
    fontSize: 14,
    textAlign: 'center',
  },
  newBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#FF3B30',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  newBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingVertical: 8,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  navText: {
    fontSize: 12,
    color: '#666',
  },
});
