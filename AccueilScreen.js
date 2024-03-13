import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Footer from './Footer'; // Import the Footer component

const AccueilScreen = ({ navigation }) => {
  const navigateToBureau = () => {
    navigation.navigate('Bureau');
  };

  const navigateToHoraire = () => {
    navigation.navigate('Horaire');
  };

  const navigateToFormedeboxe = () => {
    navigation.navigate('Formedeboxe');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardText}>Présentation du bureau</Text>
        <TouchableOpacity onPress={navigateToBureau} style={styles.button}>
          <Text style={styles.buttonText}>Bureau</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardText}>Informations sur les heures d'ouverture</Text>
        <TouchableOpacity onPress={navigateToHoraire} style={styles.button}>
          <Text style={styles.buttonText}>Horaire/Tarif</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardText}>Présentation des activités proposées</Text>
        <TouchableOpacity onPress={navigateToFormedeboxe} style={styles.button}>
          <Text style={styles.buttonText}>Forme de boxe</Text>
        </TouchableOpacity>
      </View>

      {/* Integrate the Footer component */}
      <View style={styles.footer}>
      <Footer></Footer>
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
    paddingBottom: 60, // Adjust the paddingBottom to accommodate the footer
  },
  card: {
    width: 150,
    alignItems: 'center',
    marginBottom: 20,
  },
  cardText: {
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#000',
    alignItems: 'center',
    padding: 20,
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AccueilScreen;
