import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { AuthStackParamList } from "../Models/AuthModel";
import RegisterScreen from "../../screen/RegisterScreen";
import LoginScreen from "../../screen/LoginScreen";

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="RegisterScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />      
    </Stack.Navigator>
  );
};

export default AuthStack;
