import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Login from "./screens/Login/Login/Login";
import Projetos from "./screens/Projetos/Projetos/Projetos";
import Requisitos from "./screens/Requisitos/Requisitos/Requisitos";
import Styles from "./Styles";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <View style={Styles.app}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Login" screenOptions={Styles.tab}>
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Projetos" component={Projetos} />
          <Tab.Screen name="Requisitos" component={Requisitos} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};
