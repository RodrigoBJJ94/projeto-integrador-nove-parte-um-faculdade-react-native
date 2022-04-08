import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function GeoLocation({ getGeoLocation, latitude, longitude }) {
    return (
        <View>
            <TouchableOpacity style={{ backgroundColor: "#036661", margin: 10, marginTop: -2, borderRadius: 10 }} onPress={getGeoLocation}>
                <Text style={{ color: "#ffffff", paddingLeft: 10, paddingRight: 10, paddingTop: 6, paddingBottom: 6, textAlign: "center", fontSize: 17.5, fontWeight: "bold" }}>Clique para saber a posição geográfica (GPS) do seu dispositivo móvel</Text>
            </TouchableOpacity>
            <Text numberOfLines={1} style={{ color: "#000000", marginLeft: 20, fontSize: 16, width: 145, marginTop: -5 }}>Latitude: {latitude}</Text>
            <Text style={{ color: "#000000", marginLeft: 20, fontSize: 16 }}>Longitude: {longitude}</Text>
        </View>
    );
};
