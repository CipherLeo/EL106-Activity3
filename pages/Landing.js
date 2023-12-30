import * as React from 'react';
import { View, Image } from 'react-native';
import {
  Button,
  Text,
} from 'react-native-paper';
import Styles from '../styles/GlobalStyles';

const Landing = ({ navigation }) => (
  <View style={Styles.container}>
    <Image 
      source={require('../assets/react-icon.png')}
      style={Styles.image} />
    <Text variant='headlineLarge'>Login</Text>
    <Text 
      style={[Styles.centerText, Styles.subtitleText]} 
      variant='bodyLarge'>
      The easiest way to start your amazing application.
    </Text>
    <Button 
      style={Styles.block} 
      mode='contained' 
      onPress={ () => navigation.navigate('Login') }>
      Login
    </Button>
    <Button 
      style={Styles.block} 
      mode='outlined' 
      onPress={ () => navigation.navigate('Registration') }>
      Sign Up
    </Button>
  </View>
);

export default Landing;