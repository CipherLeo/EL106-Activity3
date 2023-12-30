import * as React from 'react';
import { View, Image } from 'react-native';
import {
  Button,
  Text,
  TextInput,
} from 'react-native-paper';
import Styles from '../styles/GlobalStyles';

const Login = ({ navigation }) => (
  <View style={Styles.container}>
    <Image 
      source={require('../assets/react-icon.png')}
      style={Styles.image} />
    <Text variant='headlineLarge'>Welcome back</Text>
    <TextInput 
      style={Styles.block} 
      mode='outlined' 
      label="Email" />
    <TextInput 
      style={Styles.block}  
      mode='outlined' 
      label="Password" />
    <Button
      mode='text'
      style={[
        Styles.subtitleText, 
        Styles.rightText,
      ]}
      onPress={ () => navigation.navigate('AccountRecovery') }>
      Forgot your password?
    </Button>
    <Button 
      style={Styles.block} 
      mode='contained'
      onPress={ () => navigation.navigate('Home') }>
      Login
    </Button>
    <View style={Styles.textContainerRow}>
      <Text variant='labelLarge' style={Styles.subtitleText}>Don't have an account?</Text>
      <Button
        mode='text'
        onPress={ () => navigation.navigate('Registration') }>
        Sign Up
      </Button>
    </View>
  </View>
);

export default Login;