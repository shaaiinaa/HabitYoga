import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Lock} from 'lucide-react-native';

interface ResourceCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  isLocked?: boolean;
  friendsToUnlock?: number;
}

export function ResourceCard({
  title,
  subtitle,
  description,
  image,
  isLocked = true,
  friendsToUnlock = 1,
}: ResourceCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        {/* <Image source={{uri: image}} style={styles.image} /> */}
        <Image source={image} style={styles.image} />

        {isLocked && (
          <View style={styles.lockOverlay}>
            <Lock size={24} color="#fff" />
          </View>
        )}
      </View>
      <View style={styles.content}>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity
          style={[
            styles.button,
            isLocked ? styles.buttonLocked : styles.buttonDownload,
          ]}>
          <Text style={styles.buttonText}>
            {isLocked
              ? `Invite ${friendsToUnlock} Friend to unlock`
              : 'Download'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    height: 160,
  },
  image: {
    width: '100%',
    height: '100%',
    // resizeMode: 'contain',
  },
  lockOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 16,
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#444',
    marginBottom: 16,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonLocked: {
    backgroundColor: '#4A90E2',
  },
  buttonDownload: {
    backgroundColor: '#2ECC71',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
