import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AuthStack from "./Stack/AuthStack";

const Stack = createNativeStackNavigator<any>();

const AppRoutes = () => {
  return (
    <NavigationContainer>
       <AuthStack/>
    </NavigationContainer>
  );
};

export default AppRoutes;
