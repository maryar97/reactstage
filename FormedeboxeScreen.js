import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { CardField, useStripe } from '@stripe/stripe-react-native';

const FormedeboxeScreen = () => {
  const { confirmPayment, handleCardAction } = useStripe();

  const handlePayment = async (price) => {
    try {
      const { paymentMethod, error: pmError } = await handleCardAction();
      if (pmError) {
        throw new Error(pmError.message);
      }

      const { paymentIntent, error } = await confirmPayment('CLIENT_SECRET_FROM_SERVER', {
        paymentMethodId: paymentMethod.id,
      });

      if (error) {
        throw new Error(error.message);
      }

      console.log('Paiement réussi:', paymentIntent);
      Alert.alert('Succès', 'Paiement réussi!');
    } catch (e) {
      console.error('Erreur de paiement:', e.message);
      Alert.alert('Erreur', 'Erreur de paiement: ' + e.message);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Formes de boxes</Text>

      <View style={styles.card}>
        <Image
          source={require('./assets/logoa.png')}
          style={styles.cardImage}
        />
        <Text style={styles.cardTitle}>Boxe EDUCATIVE</Text>
        <Text style={styles.cardText}>boxe avec coup non porté</Text>
        <Text style={styles.cardText}>Prix: 150£</Text>
        <TouchableOpacity onPress={() => handlePayment(150)}>
          <Text style={styles.paymentButton}>Payer</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Image
          source={require('./assets/logob.png')}
          style={styles.cardImage}
        />
        <Text style={styles.cardTitle}>Boxe Amateur </Text>
        <Text style={styles.cardText}>boxe avec coup porté avec casque</Text>
        <Text style={styles.cardText}>Prix: 150£</Text>
        <TouchableOpacity onPress={() => handlePayment(150)}>
          <Text style={styles.paymentButton}>Payer</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Image
          source={require('./assets/logodc.png')}
          style={styles.cardImage}
        />
        <Text style={styles.cardTitle}>Boxe Pro </Text>
        <Text style={styles.cardText}>boxe sans casque bandage dur</Text>
        <Text style={styles.cardText}>Prix: 150£</Text>
        <TouchableOpacity onPress={() => handlePayment(150)}>
          <Text style={styles.paymentButton}>Payer</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Image
          source={require('./assets/logod.png')}
          style={styles.cardImage}
        />
        <Text style={styles.cardTitle}>Boxe Pro </Text>
        <Text style={styles.cardText}>boxe sans casque bandage dur</Text>
        <Text style={styles.cardText}>Prix: 150£</Text>
        <TouchableOpacity onPress={() => handlePayment(150)}>
          <Text style={styles.paymentButton}>Payer</Text>
        </TouchableOpacity>
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
    backgroundColor: 'white', // Fond blanc
  },
  card: {
    width: 150,
    alignItems: 'center',
    marginBottom: 20,
  },
  cardText: {
    color: 'black', // Texte noir
    textAlign: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black', // Texte noir
    marginBottom: 5,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  heading: {
    fontSize: 24,
    color: 'black', // Texte noir
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default FormedeboxeScreen;
