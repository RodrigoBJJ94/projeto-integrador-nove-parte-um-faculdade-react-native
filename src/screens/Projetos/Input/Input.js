import React from "react";
import { View, Text, TextInput } from "react-native";
import Styles from "./Styles";

export default function Input({ setProjectName }) {
    return (
        <>
            <View style={Styles.viewName}>
                <Text style={Styles.name}>Nome do Projeto</Text>
            </View>
            <View style={Styles.viewInput}>
                <TextInput onChangeText={text => setProjectName(text)}
                    style={Styles.input} />
            </View>
        </>
    );
};
