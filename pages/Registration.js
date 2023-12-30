import * as React from 'react';
import { View, Image } from 'react-native';
import {
  Button,
  Text,
  TextInput,
} from 'react-native-paper';
import Styles from '../styles/GlobalStyles';

const Registration = ({ navigation }) => (
  <View style={Styles.container}>
    <Image 
      source={require('../assets/react-icon.png')}
      style={Styles.image} />
    <Text variant='headlineLarge'>Create Account</Text>
    <TextInput 
      style={Styles.block} 
      mode='outlined' 
      label="Name" />
    <TextInput 
      style={Styles.block} 
      mode='outlined' 
      label="Email" />
    <TextInput 
      style={Styles.block}  
      mode='outlined' 
      label="Password" />
    <Button 
      style={Styles.block} 
      mode='contained'
      onPress={ () => navigation.navigate('Login') }>
      Login
    </Button>
    <View style={Styles.textContainerRow}>
      <Text variant='labelLarge' style={Styles.subtitleText}>
        Already have an account?
      </Text>
      <Button
        mode='text'
        onPress={ () => navigation.navigate('Login') }>
        Log In
      </Button>
    </View>
  </View>
);

export default Registration;