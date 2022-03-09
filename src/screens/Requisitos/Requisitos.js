import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

export default function Requisitos() {
    const [projectName, setProjectName] = useState("");
    const [startDate, setStartDate] = useState(false);
    const [endDate, setEndDate] = useState(false);

    function showDate() {
        setStartDate(true);
        setEndDate(true);
    };

    function hideDate() {
        setStartDate(false);
        setEndDate(false);
    };

    function confirmDate(date) {
        Alert.alert(date.toString());
        showDate();
    };

    return (
        <View>
            <View>
                <Text>Requisitos</Text>
            </View>
            <View>
                <Text>Descrição do Requisito</Text>
                <TextInput onChangeText={text => setProjectName(text)}
                    style={{ backgroundColor: "orange", color: "white" }} />
            </View>
            <View>
                <TouchableOpacity onPress={showDate} >
                    <Text>Data do Registro</Text>
                </TouchableOpacity>
                <DateTimePicker isVisible={startDate} mode="date"
                    onConfirm={confirmDate} onCancel={hideDate} />
            </View>
            <View>
                <Text>Importância do Requisito (de 1 a 5)</Text>
                <TextInput onChangeText={text => setProjectName(text)}
                    style={{ backgroundColor: "orange", color: "white" }} />
                <Text>Nível de Dificuldade da Implementação do Requisito (de 1 a 5)</Text>
                <TextInput onChangeText={text => setProjectName(text)}
                    style={{ backgroundColor: "orange", color: "white" }} />
                <Text>Tempo estimado da contrução e Entrega do Requisito (em horas)</Text>
                <TextInput onChangeText={text => setProjectName(text)}
                    style={{ backgroundColor: "orange", color: "white" }} />
            </View>
        </View>
    );
};
