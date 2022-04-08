import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Styles from "./Styles";

export default function Images({ viewShotRef }) {
    const [uri, setUri] = useState("");

    return (
        <View>
            <TouchableOpacity style={Styles.button}
                onPress={() => {
                    viewShotRef.current.capture().then((uri) => {
                        setUri(uri);
                    });
                }}>
                <Text style={Styles.buttonText}>
                    Clique para tirar uma foto da tela</Text>
            </TouchableOpacity>
            {uri ? (
                <View style={Styles.viewImage}>
                    <Image style={Styles.image}
                        source={{ uri: uri }} />
                </View>
            ) : null}
        </View>
    );
};
