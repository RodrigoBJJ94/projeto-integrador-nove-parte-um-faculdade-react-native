import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Styles from "./Styles";

export default function GeoLocation({ getGeoLocation, latitude, longitude }) {
    return (
        <View>
            <TouchableOpacity style={Styles.button} onPress={getGeoLocation}>
                <Text style={Styles.buttonText}>
                    Clique para saber a posição geográfica (GPS) do seu dispositivo móvel
                </Text>
            </TouchableOpacity>
            <Text numberOfLines={1} style={Styles.lat}>Latitude: {latitude}</Text>
            <Text style={Styles.long}>Longitude: {longitude}</Text>
        </View>
    );
};
