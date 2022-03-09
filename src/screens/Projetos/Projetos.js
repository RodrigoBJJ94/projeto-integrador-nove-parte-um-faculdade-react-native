import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, StatusBar } from "react-native";
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

    function confirmDate() {
        showDate();
    };

    function sendData() {
        if (projectName === "") {
            Alert.alert("Favor preencha os dados do projeto!");
        } else {
            Alert.alert("Os dados do projeto foram salvos!");
        };
    };

    return (
        <View style={Styles.mainView}>
            <StatusBar backgroundColor="#ff3300" />
            <View style={Styles.viewCaption}>
                <Text style={Styles.caption}>Preencha os Dados do Projeto</Text>
            </View>
            <View style={Styles.viewName}>
                <Text style={Styles.name}>Nome do Projeto</Text>
            </View>
            <View style={Styles.viewInput}>
                <TextInput onChangeText={text => setProjectName(text)}
                    style={Styles.input} />
            </View>
            <View style={Styles.viewStartDate}>
                <TouchableOpacity onPress={showDate} style={Styles.buttonStartDate}>
                    <Text style={Styles.starDate}>Data de Início</Text>
                </TouchableOpacity>
                <DateTimePicker isVisible={startDate} mode="date"
                    onConfirm={confirmDate} onCancel={hideDate} />
            </View>
            <View style={Styles.viewEndDate}>
                <TouchableOpacity onPress={showDate} style={Styles.buttonEndDate}>
                    <Text style={Styles.endDate}>Data Estimada de Entrega Final</Text>
                </TouchableOpacity>
                <DateTimePicker isVisible={endDate} mode="date"
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
        marginBottom: 100,
    },
    caption: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#000000",
    },
    viewName: {
        alignItems: "center",
        marginBottom: 6,
    },
    name: {
        fontSize: 20,
        color: "#000000",
    },
    viewInput: {
        marginLeft: 10,
        marginRight: 10,
    },
    input: {
        backgroundColor: "#ff3300",
        borderRadius: 5,
        fontSize: 18,
        color: "#ffffff",
        paddingLeft: 10,
    },
    viewStartDate: {
        alignItems: "center",
        marginTop: 70,
    },
    buttonStartDate: {
        backgroundColor: "#ff3300",
        width: 370,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },
    starDate: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#ffffff",
    },
    viewEndDate: {
        alignItems: "center",
        marginTop: 70,
    },
    buttonEndDate: {
        backgroundColor: "#ff3300",
        width: 370,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },
    endDate: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#ffffff",
    },
    viewSend: {
        marginTop: 100,
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
