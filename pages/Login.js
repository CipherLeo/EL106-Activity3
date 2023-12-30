import * as React from 'react';
import { View, Image } from 'react-native';
import {
  Button,
  Text,
  TextInput,
  HelperText,
} from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Styles from '../styles/GlobalStyles';

const Login = ({ navigation }) => {
  const validationSchema = Yup.object({
    email: Yup
      .string()
      .email("Invalid email")
      .required("Please enter your email"),
    password: Yup
      .string()
      .min(8, "Must be at least 8 characters")
      .required("Please enter your password"),
  })

  const [hidePassword, setHidePassword] = React.useState(true);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
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
        return (
          <View style={Styles.container}>
            <Image
              source={require('../assets/react-icon.png')}
              style={Styles.image} />
            <Text variant='headlineLarge'>Welcome back</Text>
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
              loading={isSubmitting}
              disabled={isSubmitting}
              onPress={handleSubmit} >
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
      }}
    </Formik>
  );
};

export default Login;