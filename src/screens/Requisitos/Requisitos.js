import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

export default function Requisitos() {
    const [description, setDescription] = useState("");
    const [inportance, setInportance] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [endTime, setEndTime] = useState("");
    const [registerDate, setRegisterDate] = useState(false);

    function showDate() {
        setRegisterDate(true);
    };

    function hideDate() {
        setRegisterDate(false);
    };

    function confirmDate() {
        setRegisterDate(false);
    };

    function sendData() {
        if (description !== "" && inportance !== "" && difficulty !== "" && endTime !== "") {
            Alert.alert("Os requisitos foram salvos!");
        } else {
            Alert.alert("Favor preencha todos os dados!");
        };
    };

    return (
        <View style={Styles.mainView}>
            <View style={Styles.viewCaption}>
                <Text style={Styles.caption}>Preencha os Requisitos</Text>
            </View>
            <View style={Styles.viewName}>
                <Text style={Styles.name}>Descrição do Requisito</Text>
                <TextInput onChangeText={text => setDescription(text)}
                    style={Styles.input} />
                <Text style={Styles.name}>Importância do Requisito (1 a 5)</Text>
                <TextInput onChangeText={text => setInportance(text)}
                    style={Styles.input} />
                <Text style={Styles.name}>Nível de Dificuldade da Implementação do Requisito (1 a 5)</Text>
                <TextInput onChangeText={text => setDifficulty(text)}
                    style={Styles.input} />
                <Text style={Styles.name}>Tempo estimado da Contrução/Entrega do Requisito (horas)</Text>
                <TextInput onChangeText={text => setEndTime(text)}
                    style={Styles.input} />
            </View>
            <View style={Styles.viewRegisterDate}>
                <TouchableOpacity onPress={showDate} style={Styles.buttonRegisterDate}>
                    <Text style={Styles.registerDate}>Data do Registro</Text>
                </TouchableOpacity>
                <DateTimePicker isVisible={registerDate} mode="date"
                    onConfirm={confirmDate} onCancel={hideDate} />
            </View>
            <View style={Styles.viewSend}>
                <TouchableOpacity onPress={sendData} style={Styles.buttonSend}>
                    <Text style={Styles.send}>Finalizar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    viewCaption: {
        alignItems: "center",
        marginTop: 50,
        marginBottom: 70,
    },
    caption: {
        fontSize: 22,
        color: "#000000",
    },
    viewName: {
        marginBottom: 6,
    },
    name: {
        fontSize: 14,
        color: "#000000",
        alignSelf: "center",
        marginBottom: 10,
        marginTop: 10,
    },
    input: {
        backgroundColor: "#ff3300",
        borderRadius: 5,
        fontSize: 18,
        color: "#ffffff",
        paddingLeft: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    viewRegisterDate: {
        alignItems: "center",
        marginTop: 20,
    },
    buttonRegisterDate: {
        backgroundColor: "#ff3300",
        width: 370,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },
    registerDate: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#ffffff",
    },
    viewSend: {
        marginTop: 70,
        alignItems: "center",
    },
    buttonSend: {
        backgroundColor: "#000000",
        width: 110,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    },
    send: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#ffffff",
    }
});
