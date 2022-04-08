import React from "react";
import { View, Text, TextInput } from "react-native";
import Styles from "./Styles";

export default function Inputs({ setName, setPassword }) {
    return (
        <View style={Styles.viewInputs}>
            <Text style={Styles.texts}>Nome do Usuário</Text>
            <TextInput style={Styles.textInputs} onChangeText={text => setName(text)} />
            <Text style={Styles.texts}>Senha</Text>
            <TextInput style={Styles.textInputs} onChangeText={text => setPassword(text)} />
        </View>
    );
};
