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
    <Text variant='headlineLarge'>ZenList</Text>
    <Text 
      style={[Styles.centerText, Styles.subtitleText]} 
      variant='bodyLarge'>
      Ditch the brain clutter, embrace the calm. Your pocket-sized productivity pal, here to transform your to-do list into a powerful tool for success.
    </Text>
    <Text 
      style={[Styles.centerText, Styles.subtitleText]} 
      variant='bodyLarge'>
      Note: This is still a work in progress. Please refer to README.md for details.
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