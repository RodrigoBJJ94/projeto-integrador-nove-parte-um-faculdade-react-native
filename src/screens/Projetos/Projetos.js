import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

export default function Projetos() {
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
                <Text>Projeto</Text>
            </View>
            <View>
                <Text>Nome do Projeto</Text>
                <TextInput onChangeText={text => setProjectName(text)}
                    style={{ backgroundColor: "orange", color: "white" }} />
            </View>
            <View>
                <TouchableOpacity onPress={showDate} >
                    <Text>Data de Início</Text>
                </TouchableOpacity>
                <DateTimePicker isVisible={startDate} mode="date"
                    onConfirm={confirmDate} onCancel={hideDate} />
            </View>
            <View>
                <TouchableOpacity onPress={showDate} >
                    <Text>Data Estimada de Entrega Final</Text>
                </TouchableOpacity>
                <DateTimePicker isVisible={startDate} mode="date"
                    onConfirm={confirmDate} onCancel={hideDate} />
            </View>
        </View>
    );
};
