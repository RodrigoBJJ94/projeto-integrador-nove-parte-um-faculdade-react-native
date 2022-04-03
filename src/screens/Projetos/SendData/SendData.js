import React from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from "./Styles";

export default function SendData({ projectName, setProjectName }) {
    function sendData() {
        if (projectName === "") {
            Alert.alert("Favor preencha os dados do projeto!");
        } else {
            Alert.alert("Os dados do projeto foram salvos!");
        };
    };

    const storeData = (key, value) => {
        AsyncStorage.setItem(key, value)
    }

    

    return (
        <View style={Styles.viewSend}>
            <TouchableOpacity onPress={storeData} style={Styles.buttonSend}>
                <Text style={Styles.send}>Finalizar</Text>
            </TouchableOpacity>
        </View>
    );
};
