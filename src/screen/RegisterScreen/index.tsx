import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import CustomTextInput from "../../component/Input/CustomTextInput";
import CustomPasswordTextInput from "../../component/Input/CustomPasswordTextInput";
import PrimaryButton from "../../component/Button/PrimaryButton";
import SecondaryButton from "../../component/Button/SecondaryButton";
import styles from "./styles";
import { AuthStackScreenProps } from "../../navigation/Models/AuthModel";
import firebase from "../../firebase/firebaseConfig";

const RegisterScreen = ({
  navigation,
}: AuthStackScreenProps<"RegisterScreen">) => {
  const [form, setForm] = useState({
    userName: "",
    userNameError: "",
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
  });

  const handleSignUp = () => {
    if (form.userName === "") {
      Alert.alert("Error", "Please enter your username");
    } else if (form.email === "") {
      Alert.alert("Error", "Please enter your email");
    } else if (form.password === "") {
      Alert.alert("Error", "Please enter your password");
    } else {
      const formData = {
        userName: form.userName,
        email: form.email,
        password: form.password,
      };
      try {
        firebase
          .auth()
          .createUserWithEmailAndPassword(form.email, form.password)
          .then(() => {
            console.log("User account created & signed in!");
            Alert.alert("Success", "User account created & signed in!");
            navigation.navigate("LoginScreen");
            // Get the currently signed-in user
            const userId = firebase.auth().currentUser?.uid;
            // Add a new document in collection
            const userRef = firebase
              .firestore()
              .collection("userData")
              .doc(userId)
              .get();
            // Check if user already exists
            userRef.then((doc) => {
              if (!doc.exists) {
                // User doesn't exist
                firebase
                  .firestore()
                  .collection("userData")
                  .doc(userId)
                  .set(formData);
              } else {
                Alert.alert("Error", "User already exists");
                console.log("User already exists");
              }
            });
          })
          .catch((error: any) => {
            if (
              error.message ===
              "Firebase: The email address is already in use by another account.(auth/email-already-in-use)."
            ) {
              Alert.alert("Error", "Email already in use");
              console.log("That email address is already in use!");
            } else if (
              error.message ===
              "Firebase: The email address is badly formatted.(auth/invalid-email)"
            ) {
              Alert.alert("Error", "Invalid email address");
              console.log("That email address is invalid!");
            } else if (
              error.message ===
              "Firebase: Password should be at least 6 characters.(auth/weak-password)"
            ) {
              Alert.alert("Error", "Password should be at least 6 characters");
              console.log("Password should be at least 6 characters!");
            } else {
              Alert.alert("Error", error.message);
              console.log("sign up system error", error.message);
            }
          });
      } catch (error: any) {
        console.log("sign up system error", error.message);
      }
    }
  };

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
          onChangeText={(text) => setForm({ ...form, userName: text })}
          error={form.userNameError}
          onBlur={() => {
            if (form.userName === "") {
              setForm({ ...form, userNameError: "Please enter your username" });
            } else {
              setForm({ ...form, userNameError: "" });
            }
          }}
        />

        {/* Email Input */}
        <CustomTextInput
          label="Email"
          placeholder="Enter your email"
          value={form.email}
          onChangeText={(text) => setForm({ ...form, email: text })}
          error={form.emailError}
          onBlur={() => {
            if (form.email === "") {
              setForm({ ...form, emailError: "Please enter your email" });
            } else {
              setForm({ ...form, emailError: "" });
            }
          }}
        />

        {/* Password Input */}
        <CustomPasswordTextInput
          label="Password"
          placeholder="Enter your password"
          value={form.password}
          onChangeText={(text) => setForm({ ...form, password: text })}
          keyboardType="default"
          error={form.passwordError}
          onBlur={() => {
            if (form.password === "") {
              setForm({ ...form, passwordError: "Please enter your password" });
            } else {
              setForm({ ...form, passwordError: "" });
            }
          }}
        />

        {/* Button container */}
        <View style={styles.buttonContainer}>
          <PrimaryButton label="Sign Up" onPress={handleSignUp} />
          {/* Cancle Button */}
          <SecondaryButton
            label="Login"
            onPress={() => {
              navigation.navigate("LoginScreen");
            }}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
