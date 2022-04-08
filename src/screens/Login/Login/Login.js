import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";

export default function Login({ navigation }) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    function userRegister() {
        if (name !== "" && password !== "") {
            Alert.alert("Usuário cadastrado!");
        } else {
            Alert.alert("Favor preencha todos os dados!");
        };
    };

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
            <Text>Faça o seu cadastro abaixo</Text>
            <Text>Nome</Text>
            <TextInput onChangeText={text => setName(text)} />
            <Text>Senha</Text>
            <TextInput onChangeText={text => setPassword(text)} />
            <TouchableOpacity onPress={userRegister}>
                <Text>Cadastrar Usuário</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={userLogin}>
                <Text>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
};
