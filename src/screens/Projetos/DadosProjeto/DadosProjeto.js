import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function DadosProjeto({ projectName, setProjectName }) {
    function deleteData() {
       setProjectName("");
    };

    return (
        <View style={{ marginTop: 100 }}>
            <Text style={{ fontSize: 30, color: "#000000", textAlign: "center", marginBottom: 40 }}>Projetos Salvos</Text>
            <Text style={{ fontSize: 20, color: "#000000", marginLeft: 20, marginBottom: 450 }}>Nome do Projeto: {projectName}</Text>
            <View style={{ alignItems: "center", marginBottom: 20 }}>
                <TouchableOpacity onPress={() => deleteData()} style={{ backgroundColor: "#f00000", width: 140, height: 80, borderRadius: 50, justifyContent: "center" }}>
                    <Text style={{ color: "#000000", fontSize: 20, textAlign: "center" }}>Excluir Projeto</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
