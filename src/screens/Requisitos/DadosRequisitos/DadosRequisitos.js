import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function DadosRequisitos({ description, inportance, difficulty, endTime, setDescription, setInportance, setDifficulty, setEndTime }) {
    function deleteData() {
        setDescription("");
        setInportance("");
        setDifficulty("");
        setEndTime("");
    };

    return (
        <View style={{ marginTop: 100 }}>
            <Text style={{ fontSize: 30, color: "#000000", textAlign: "center", marginBottom: 40 }}>Requisitos Salvos</Text>
            <Text style={{ fontSize: 20, color: "#000000", marginLeft: 20, marginBottom: 50 }}>Descrição do Requisito: {description}</Text>
            <Text style={{ fontSize: 20, color: "#000000", marginLeft: 20, marginBottom: 50 }}>Importância do Requisito: {inportance}</Text>
            <Text style={{ fontSize: 20, color: "#000000", marginLeft: 20, marginBottom: 50 }}>Nível de Dificuldade da Implementação do Requisito: {difficulty}</Text>
            <Text style={{ fontSize: 20, color: "#000000", marginLeft: 20, marginBottom: 170 }}>Tempo Estimado da Construção/Entrega do Requisito: {endTime}</Text>
            <View style={{ alignItems: "center", marginBottom: 20 }}>
                <TouchableOpacity onPress={() => deleteData()} style={{ backgroundColor: "#f00000", width: 140, height: 80, borderRadius: 50, justifyContent: "center" }}>
                    <Text style={{ color: "#000000", fontSize: 16.5, textAlign: "center" }}>Excluir Requisitos</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
