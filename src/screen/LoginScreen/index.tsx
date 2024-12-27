import { Alert, KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '../../component/Input/CustomTextInput'
import styles from './styles'
import CustomPasswordTextInput from '../../component/Input/CustomPasswordTextInput'
import PrimaryButton from '../../component/Button/PrimaryButton'
import SecondaryButton from '../../component/Button/SecondaryButton'
import { AuthStackScreenProps } from '../../navigation/Models/AuthModel'
import firebase from '../../firebase/firebaseConfig'

const LoginScreen = ({navigation}: AuthStackScreenProps<'LoginScreen'>) => {
    const [form, setForm] = useState({
        email: '',
        emailError: '',
        password: '',
        passwordError: ''
    })

    const handleLogin = () => {
        if (form.email === '') {
            Alert.alert('Error', 'Please enter your email')
        } else if (form.password === '') {
            Alert.alert('Error', 'Please enter your password')
        } else {
            try {

                firebase.auth().signInWithEmailAndPassword(form.email, form.password)
                .then((userCredentials) => {
                    var user = userCredentials.user;
                    console.log('get user', user);
                    
                    console.log('User account signed in!');
                    Alert.alert('Success', 'User account signed in!')
                })
                .catch((error) => {
                    if (error.message === 'Firebase: The email address is badly formatted. (auth/invalid-email).') {
                        Alert.alert('Error', 'The email address is badly formatted.')
                    } else if (error.message === 'Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found).') {
                        Alert.alert('Error', 'There is no user record corresponding to this identifier. The user may have been deleted.')
                    } else if (error.message === 'Firebase: The password is invalid or the user does not have a password. (auth/wrong-password).') {
                        Alert.alert('Error', 'The password is invalid or the user does not have a password.')
                    } else {
                        Alert.alert('Error', error.message)
                    }
                })
            } catch (error) {
                console.log(error)
            }
        }
    }

  return (
    <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
    >
    <SafeAreaView style={styles.wrapper}>
        {/* Satus Bar */}
        <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
        />

        {/* Header */}
        <View style={styles.header}>
            <Text style={styles.headerText}>Login</Text>
        </View>

      {/* Email Input */}
      <CustomTextInput
        label="Email"
        placeholder="Enter your email"
        value={form.email}
        onChangeText={(text) => setForm({...form, email: text})}
        error={form.emailError}
        onBlur={() => {
            if (form.email === '') {
                setForm({...form, emailError: 'Please enter your email'})
            } else {
                setForm({...form, emailError: ''})
            }
        }}
      />

      {/* Password Input */}
      <CustomPasswordTextInput
        label="Password"
        placeholder="Enter your password"
        value={form.password}
        onChangeText={(text) => setForm({...form, password: text})}
        keyboardType="default"
        error={form.passwordError}
        onBlur={() => {
            if (form.password === '') {
                setForm({...form, passwordError: 'Please enter your password'})
            } else {
                setForm({...form, passwordError: ''})
            }
        }}
      />

      {/* Button container */}
      <View style={styles.buttonContainer}>
        <PrimaryButton
            label="Login"
            onPress={handleLogin}
        />
        {/* Cancle Button */}
        <SecondaryButton
            label="Sign Up"
            onPress={() => {
                navigation.navigate('RegisterScreen')
            }}
        />
      </View>
    </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen;