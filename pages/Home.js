import * as React from 'react';
import { View, Image } from 'react-native';
import {
  Button,
  Text,
} from 'react-native-paper';
import Styles from '../styles/GlobalStyles';

const Home = ({ navigation }) => (
  <View style={Styles.container}>
    <Image 
      source={require('../assets/react-icon.png')}
      style={Styles.image} />
    <Text variant='headlineLarge'>Let's start</Text>
    <Text 
      style={[Styles.centerText, Styles.subtitleText]} 
      variant='bodyLarge'>
      Your amazing app starts here. Open your favorite code editor and start editing this project.
    </Text>
    <Button 
      style={Styles.block} 
      mode='outlined' 
      onPress={ () => navigation.navigate('Login') }>
      Log out
    </Button>
  </View>
);

export default Home;