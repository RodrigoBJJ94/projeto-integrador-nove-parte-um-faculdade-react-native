import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Styles from "./Styles";

export default function DadosRequisitos({ description, inportance, difficulty, endTime, setDescription, setInportance, setDifficulty, setEndTime, latitude, longitude, setLatitude, setLongitude }) {

    function deleteData() {
        setDescription("");
        setInportance("");
        setDifficulty("");
        setEndTime("");
        setLatitude("");
        setLongitude("");
    };

    return (
        <View style={Styles.mainView}>
            <Text style={Styles.mainText}>Requisitos Salvos</Text>
            <Text style={Styles.nameText}>Descrição do Requisito: {description}</Text>
            <Text style={Styles.nameText}>Importância do Requisito: {inportance}</Text>
            <Text style={Styles.nameText}>
                Nível de Dificuldade da Implementação do Requisito: {difficulty}
            </Text>
            <Text style={Styles.nameText}>
                Tempo Estimado da Construção/Entrega do Requisito: {endTime}
            </Text>
            <Text numberOfLines={1} style={Styles.nameTextLat}>Latitude: {latitude}</Text>
            <Text style={Styles.nameText}>Longitude: {longitude}</Text>
            <View style={Styles.viewButton}>
                <TouchableOpacity onPress={() => deleteData()} style={Styles.button}>
                    <Text style={Styles.textButton}>Excluir Requisitos e posições</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
