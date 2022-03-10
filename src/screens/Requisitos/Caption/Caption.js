import React from "react";
import { View, Text } from "react-native";
import Styles from "./Styles";

export default function Caption() {
    return (
        <View style={Styles.viewCaption}>
            <Text style={Styles.caption}>Preencha os Requisitos</Text>
        </View>
    );
};
