import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";

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
            <TouchableOpacity onPress={userRegister}>
                <Text>Cadastrar Usuário</Text>
            </TouchableOpacity>
        </View>
    );
};
