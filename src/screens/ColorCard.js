import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ColorCard({ colorName, colorHex, colorImage }) {
  return (
    <View style={styles.cardContainer}>
      <Image source={colorImage} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{colorName}</Text>
      <Text style={styles.cardHex}>{colorHex}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: 120,
    height: 180,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 90,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
    textAlign: 'center',
  },
  cardHex: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
    textAlign: 'center',
  },
});
