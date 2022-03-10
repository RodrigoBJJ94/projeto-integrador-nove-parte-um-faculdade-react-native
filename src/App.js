import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Projetos from "./screens/Projetos/Projetos/Projetos";
import Requisitos from "./screens/Requisitos/Requisitos";
import { navigationStyle } from "./NavigationStyles";
import Styles from "./Styles";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <View style={Styles.app}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Projetos" screenOptions={navigationStyle}>
          <Tab.Screen name="Projetos" component={Projetos} />
          <Tab.Screen name="Requisitos" component={Requisitos} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};
