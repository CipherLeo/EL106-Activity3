import * as React from 'react';
import { PaperProvider } from 'react-native-paper';
// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Pages
import Landing from './pages/Landing';
import Login from './pages/Login';
import Registration from './pages/Registration';
import AccountRecovery from './pages/AccountRecovery';
import Home from './pages/Home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator initialRouteName='Landing'>
          <Stack.Screen name='Landing' component={ Landing } />
          <Stack.Screen name='Login' component={ Login } />
          <Stack.Screen name='Registration' component={ Registration } />
          <Stack.Screen 
            name='AccountRecovery' 
            component={ AccountRecovery } 
            options={{title: 'Account Recovery'}} />
          <Stack.Screen name='Home' component={ Home } />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}

export default App;