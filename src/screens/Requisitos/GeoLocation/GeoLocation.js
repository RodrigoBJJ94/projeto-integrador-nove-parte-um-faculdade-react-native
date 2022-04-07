import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function GeoLocation({ getGeoLocation, latitude, longitude }) {
    return (
        <View>
            <TouchableOpacity style={{ backgroundColor: "#036661", margin: 10, borderRadius: 10 }} onPress={getGeoLocation}>
                <Text style={{ color: "#ffffff", padding: 10, alignSelf: "center", fontSize: 17.5 }}>Clique para saber a posição geográfica (GPS) do seu dispositivo móvel</Text>
            </TouchableOpacity>
            <Text style={{ color: "#000000", marginLeft: 20, fontSize: 16 }}>Lat: {latitude}</Text>
            <Text style={{ color: "#000000", marginLeft: 20, fontSize: 16 }}>Lon: {longitude}</Text>
        </View>
    );
};
