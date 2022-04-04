import React from "react";
import { View, Text, TextInput } from "react-native";
import Styles from "./Styles";

export default function Inputs({ setDescription, setInportance, setDifficulty, setEndTime }) {
    return (
        <View style={Styles.viewName}>
            <Text style={Styles.name}>
                Descrição do Requisito</Text>
            <TextInput onChangeText={text => setDescription(text)}
                style={Styles.input} />
            <Text style={Styles.name}>
                Importância do Requisito (1 a 5)</Text>
            <TextInput onChangeText={text => setInportance(text)}
                style={Styles.input} />
            <Text style={Styles.name}>
                Nível de Dificuldade da Implementação do Requisito (1 a 5)</Text>
            <TextInput onChangeText={text => setDifficulty(text)}
                style={Styles.input} />
            <Text style={Styles.name}>
                Tempo Estimado da Construção/Entrega do Requisito (horas)</Text>
            <TextInput onChangeText={text => setEndTime(text)}
                style={Styles.input} />
        </View>
    );
};
