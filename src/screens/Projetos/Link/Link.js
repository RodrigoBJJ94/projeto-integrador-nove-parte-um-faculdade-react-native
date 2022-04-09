import React from "react";
import { View, Text, TextInput } from "react-native";
import Styles from "./Styles";

export default function Link({ setLink }) {
    return (
        <View style={Styles.viewInput}>
            <Text style={Styles.name}>Insira o Link para a Documentação Complementar</Text>
            <TextInput style={Styles.input} onChangeText={text => setLink(text)} />
        </View>
    );
};
