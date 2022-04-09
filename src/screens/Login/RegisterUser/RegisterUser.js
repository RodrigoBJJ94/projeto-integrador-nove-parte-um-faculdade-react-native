import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import Styles from "./Styles";

export default function RegisterUser({ name, password }) {
    function userRegister() {
        if (name !== "" && password !== "") {
            Alert.alert("Usuário cadastrado!");
        } else {
            Alert.alert("Favor preencha todos os dados!");
        };
    };

    return (
        <View>
            <TouchableOpacity style={Styles.button} onPress={userRegister}>
                <Text style={Styles.textButton}>Cadastrar Usuário</Text>
            </TouchableOpacity>
        </View>
    );
};
