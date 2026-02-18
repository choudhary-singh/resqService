import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {apiClient} from '../services/api';
import {COLORS, FONTS, SIZES} from '../constants/theme';

const HomeScreen = () => {
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await apiClient.get('/health');
        setHealth(response.data);
      } catch (error) {
        setHealth({status: 'UNREACHABLE', message: error.message});
      } finally {
        setLoading(false);
      }
    };

    checkHealth();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ResqService</Text>
      <Text style={styles.subtitle}>Welcome to ResqService</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Backend Status</Text>
        {loading ? (
          <ActivityIndicator size="small" color={COLORS.primary} />
        ) : (
          <Text
            style={[
              styles.status,
              {color: health?.status === 'UP' ? COLORS.success : COLORS.error},
            ]}>
            {health?.status || 'UNKNOWN'}
          </Text>
        )}
      </View>
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
  title: {
    fontSize: FONTS.xxl,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: SIZES.xs,
  },
  subtitle: {
    fontSize: FONTS.md,
    color: COLORS.darkGray,
    marginBottom: SIZES.xl,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.sm,
    padding: SIZES.lg,
    width: '100%',
    alignItems: 'center',
    shadowColor: COLORS.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: FONTS.lg,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: SIZES.sm,
  },
  status: {
    fontSize: FONTS.md,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
