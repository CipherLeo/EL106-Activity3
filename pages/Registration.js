import * as React from 'react';
import { View, Image, ScrollView } from 'react-native';
import {
  Button,
  HelperText,
  Text,
  TextInput,
} from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Styles from '../styles/GlobalStyles';

const Registration = ({ navigation }) => {
  
  const validationSchema = Yup.object({
    name: Yup
      .string()
      .trim()
      .required("Please enter your name"),
    email: Yup
      .string()
      .email("Invalid email")
      .required("Please enter your email"),
    password: Yup
      .string()
      .min(8, "Must be at least 8 characters")
      .required("Please enter your password"),
    confirmPassword: Yup
      .string()
      .oneOf([Yup.ref('password'), null], 'Passwords do not match')
  })

  const [hidePassword, setHidePassword] = React.useState(true);

  return (<Formik
    initialValues={{ 
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    }}
    validationSchema={validationSchema}
    onSubmit={async (values) => {
      
    }}
  >
    {({ 
      handleChange, 
      handleBlur, 
      handleSubmit, 
      isSubmitting, 
      errors, 
      values 
    }) => {
      console.debug(errors);
      return (
        <ScrollView>
          <View style={Styles.container}>
            <Image 
              source={require('../assets/react-icon.png')}
              style={Styles.image} />
            <Text variant='headlineLarge'>Create Account</Text>
            <TextInput 
              style={Styles.block} 
              mode='outlined' 
              label="Name"
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              error={errors.name} />
            {errors.name && (
              <HelperText type='error' visible={errors.name}>
                {errors.name}
              </HelperText>
            )}
            <TextInput 
              style={Styles.block} 
              mode='outlined' 
              label="Email"
              value={values.email}
              onChangeText={handleChange('email')}
              keyboardType='email-address'
              onBlur={handleBlur('email')}
              error={errors.email} />
            {errors.email && (
              <HelperText type='error' visible={errors.email}>
                {errors.email}
              </HelperText>
            )}
            <TextInput 
              style={Styles.block}
              mode='outlined' 
              label="Password"
              secureTextEntry={hidePassword}
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={errors.password} />
            {errors.pasword && (
              <HelperText type='error' visible={errors.password}>
                {errors.password}
              </HelperText>
            )}
            <TextInput 
              style={Styles.block}  
              mode='outlined' 
              label="Confirm Password"
              secureTextEntry={hidePassword}
              value={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              error={errors.confirmPassword} />
            {errors.confirmPassword && (
              <HelperText type='error' visible={errors.confirmPassword}>
                {errors.confirmPassword}
              </HelperText>
            )}
            <Button 
              style={Styles.block} 
              mode='contained'
              loading={isSubmitting}
              disabled={isSubmitting}
              onPress={handleSubmit} >
              Register
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
        </ScrollView>
      )
    }}
  </Formik>)
};

export default Registration;