import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BureauScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Bureau Amiens Boxing Club</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Présidente</Text>
        <Text style={styles.cardText}>Vanessa FOUACHE</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Vice-Président</Text>
        <Text style={styles.cardText}>Vincent DUFFRENOY</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Secrétaire</Text>
        <Text style={styles.cardText}>Sabine FOUACHE</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Trésorier</Text>
        <Text style={styles.cardText}>Thomas HAMIDI</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Membre</Text>
        <Text style={styles.cardText}>Steffy FOUACHE</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Membre</Text>
        <Text style={styles.cardText}>Lucien DUPONT</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Cadre Technique</Text>
        <Text style={styles.cardText}>Jérôme FOUACHE</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black',
  },
  card: {
    width: 150,
    alignItems: 'center',
    marginBottom: 20,
  },
  cardText: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  heading: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default BureauScreen;
