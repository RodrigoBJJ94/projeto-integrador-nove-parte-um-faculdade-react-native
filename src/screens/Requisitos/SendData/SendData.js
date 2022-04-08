import React from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
import Styles from "./Styles";

export default function SendData({ description, inportance, difficulty, endTime }) {
    function sendData() {
        if (description !== "" && inportance !== "" && difficulty !== "" && endTime !== "") {
            Alert.alert("Os requisitos e as posições foram salvas!");
        } else {
            Alert.alert("Favor preencha todos os dados!");
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
