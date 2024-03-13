import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.footerCol}>
        <Text style={styles.footerTitle}>AMIENS BOXING CLUB</Text>
        <Text style={styles.footerText}>GYMNASE de la Veilleire</Text>
        <Text style={styles.footerText}>salle Jacques Bataille</Text>
        <Text style={styles.footerText}>rue du Moulin Neuf</Text>
        <Text style={styles.footerText}>80080 AMIENS</Text>
      </View>
      <View style={styles.footerCol}>
        <Text style={styles.footerTitle}>Partenaires</Text>
        <Text style={styles.footerText}>Es Demenegament</Text>
        <Text style={styles.footerText}>Steack Plus</Text>
        <Text style={styles.footerText}>Ville d'Amiens</Text>
        <Text style={styles.footerText}>Amiens Métropole</Text>
      </View>
      <View style={styles.footerCol}>
        <Text style={styles.footerTitle}>CONTACT</Text>
        <Text style={styles.footerText}>téléphone: 0626259768</Text>
        <Text style={styles.footerText}>mail: jeromefouache@msn.com</Text>
      </View>
      <View style={styles.footerCol}>
        <Text style={styles.footerTitle}>Follow Us</Text>
        {/* Ajoutez ici les icônes pour les réseaux sociaux */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'white', // Fond blanc
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footerCol: {
    flex: 1,
    marginHorizontal: 5,
  },
  footerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black', // Texte noir
    marginBottom: 10,
  },
  footerText: {
    color: 'black', // Texte noir
    marginBottom: 5,
  },
});

export default Footer;
