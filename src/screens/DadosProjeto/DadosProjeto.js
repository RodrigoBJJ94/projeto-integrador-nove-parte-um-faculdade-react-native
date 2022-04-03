import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DadosProjeto() {
    const getData = async (key) => {
        const value = await AsyncStorage.getItem(key)
        console.log(value)
    }

    return (
        <View>
           <TouchableOpacity onPress={getData}>
               <Text>GetData</Text>
           </TouchableOpacity>
           
        </View>
    );
};
