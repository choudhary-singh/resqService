import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants/theme';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>RS</Text>
      </View>
      <Text style={styles.name}>ResqService User</Text>
      <Text style={styles.email}>user@resqservice.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background,
    padding: SIZES.lg,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SIZES.md,
  },
  avatarText: {
    fontSize: FONTS.xxl,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  name: {
    fontSize: FONTS.xl,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: SIZES.xs,
  },
  email: {
    fontSize: FONTS.md,
    color: COLORS.darkGray,
  },
});

export default ProfileScreen;
