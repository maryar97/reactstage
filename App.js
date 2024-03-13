import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StripeProvider } from '@stripe/stripe-react-native';
import AccueilScreen from './AccueilScreen';
import BureauScreen from './BureauScreen';
import HoraireScreen from './HoraireScreen';
import FormedeboxeScreen from './FormedeboxeScreen';
import Footer from './Footer';

const Stack = createStackNavigator();

const App = () => {
  return (
    <StripeProvider publishableKey="sk_test_51OGrEOEp0nRmZ5Z08LP6W2QIIvWXlPXk4efldJh8u1yBCm3Az3Ko8ha6o6ARFCbBvPlyrxM9SVEP5ne5EWocYIJS00CWMP336Gw">
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Accueil">
          <Stack.Screen name="Accueil" component={AccueilScreen} />
          <Stack.Screen name="Bureau" component={BureauScreen} />
          <Stack.Screen name="Horaire" component={HoraireScreen} />
          <Stack.Screen name="Formedeboxe" component={FormedeboxeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </StripeProvider>
  );
};

export default App;