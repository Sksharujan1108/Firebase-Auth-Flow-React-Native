import { KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '../../component/Input/CustomTextInput'
import CustomPasswordTextInput from '../../component/Input/CustomPasswordTextInput'
import PrimaryButton from '../../component/Button/PrimaryButton'
import SecondaryButton from '../../component/Button/SecondaryButton'
import styles from './styles'
import { AuthStackScreenProps } from '../../navigation/Models/AuthModel'

const RegisterScreen = ({navigation}: AuthStackScreenProps<'RegisterScreen'>) => {
    const [form, setForm] = useState({
        userName: '',
        userNameError: '',
        email: '',
        emailError: '',
        password: '',
        passwordError: ''
    })

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
            <Text style={styles.headerText}>Sign Up</Text>
        </View>

      {/* Username Input */}
      <CustomTextInput
        label="Username"
        placeholder="Enter your username"
        value={form.userName}
        onChangeText={(text) => setForm({...form, userName: text})}
        error={form.userNameError}
        onBlur={() => {
            if (form.userName === '') {
                setForm({...form, userNameError: 'Please enter your username'})
            } else {
                setForm({...form, userNameError: ''})
            }
        }}
      />

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
            label="Sign Up"
            onPress={() => {}}
        />
        {/* Cancle Button */}
        <SecondaryButton
            label="Login"
            onPress={() => {
                navigation.navigate('LoginScreen')
            }}
        />
      </View>
    </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen;