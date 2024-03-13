import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const HoraireScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.carouselItem}>
          <Text style={styles.title}>BOXE EDUCATIVE</Text>
          <Text style={styles.subtitle}>BOXE LOISIR</Text>
          <Text style={styles.time}>DU LUNDI AU VENDREDI DE 18H À 19H30</Text>
          <Text style={styles.time}>MERCREDI 16H/18H SAMEDI 10H/12H</Text>
          <Text style={styles.price}>Tarif: 150€</Text>
        </View>

        <View style={styles.carouselItem}>
          <Text style={styles.title}>BOXE Amateur</Text>
          <Text style={styles.time}>DU LUNDI AU VENDREDI DE 19H30 À 21H00</Text>
          <Text style={styles.price}>Tarif: 150€</Text>
        </View>

        {/* Ajoutez les autres items du carrousel de la même manière */}

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 20,
  },
  carouselItem: {
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  time: {
    color: 'white',
    fontSize: 14,
    marginBottom: 5,
  },
  price: {
    color: 'white',
    fontSize: 16,
  },
});

export default HoraireScreen;
