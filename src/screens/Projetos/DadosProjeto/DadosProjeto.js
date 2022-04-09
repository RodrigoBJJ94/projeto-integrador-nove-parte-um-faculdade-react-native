import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";

import Styles from "./Styles";

export default function DadosProjeto({ projectName, setProjectName, link }) {
    function deleteData() {
        setProjectName("");
    };

    return (
        <View style={Styles.mainView}>
            <Text style={Styles.mainText}>Projetos Salvos</Text>
            <Text style={Styles.nameText}>Nome do Projeto: {projectName}</Text>
            <View style={Styles.viewButtonLink}>
                <TouchableOpacity style={Styles.buttonLink} onPress={() => Linking.openURL(link)}>
                    <Text style={Styles.textButtonLink}>
                        Clique Aqui para Acessar o Link para a Documentação Complementar Informado
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={Styles.viewButton}>
                <TouchableOpacity onPress={() => deleteData()} style={Styles.button}>
                    <Text style={Styles.textButton}>Excluir Projeto</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
