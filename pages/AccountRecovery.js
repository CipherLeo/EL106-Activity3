import * as React from 'react';
import { View, Image } from 'react-native';
import {
  Button,
  Text,
  TextInput,
} from 'react-native-paper';
import Styles from '../styles/GlobalStyles';

const AccountRecovery = ({ navigation }) => (
  <View style={Styles.container}>
    <Image 
      source={require('../assets/react-icon.png')}
      style={Styles.image} />
    <Text variant='headlineLarge'>Restore Password</Text>
    <TextInput 
      style={Styles.block} 
      mode='outlined' 
      label="Email" />
    <Button
      style={Styles.block}
      mode='contained'
      onPress={ () => {} }>
      Send reset instructions
    </Button>
    <Button
      mode='text'
      onPress={ () => navigation.navigate('Login') }>
      Back to login
    </Button>
  </View>
);

export default AccountRecovery;