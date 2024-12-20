import { KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '../../component/Input/CustomTextInput'
import styles from './styles'
import CustomPasswordTextInput from '../../component/Input/CustomPasswordTextInput'
import PrimaryButton from '../../component/Button/PrimaryButton'
import SecondaryButton from '../../component/Button/SecondaryButton'

const LoginScreen = () => {
    const [form, setForm] = useState({
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
            onPress={() => {}}
        />
        {/* Cancle Button */}
        <SecondaryButton
            label="Cancle"
            onPress={() => {}}
        />
      </View>
    </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen;