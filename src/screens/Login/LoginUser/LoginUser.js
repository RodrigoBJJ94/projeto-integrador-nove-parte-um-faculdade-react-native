import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import Styles from "./Styles";

export default function LoginUser({ name, password, navigation }) {
    function userLogin() {
        if (name !== "" && password !== "") {
            Alert.alert("Você entrou no sistema!");
            navigation.navigate("Projetos");
        } else {
            Alert.alert("Primeiro cadastre um usuário e depois faça o login!")
        };
    };

    return (
        <View>
            <TouchableOpacity style={Styles.button} onPress={userLogin}>
                <Text style={Styles.textButton}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
};
