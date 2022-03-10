import React from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
import Styles from "./Styles";

export default function SendData({ projectName }) {
    function sendData() {
        if (projectName === "") {
            Alert.alert("Favor preencha os dados do projeto!");
        } else {
            Alert.alert("Os dados do projeto foram salvos!");
        };
    };

    return (
        <View style={Styles.viewSend}>
            <TouchableOpacity onPress={sendData} style={Styles.buttonSend}>
                <Text style={Styles.send}>Finalizar</Text>
            </TouchableOpacity>
        </View>
    );
};
