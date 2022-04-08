import React, { useState, useEffect, useRef } from "react";
import { View, ScrollView, TouchableOpacity, Text, Alert, Image } from "react-native";
import Geolocation from "@react-native-community/geolocation";
import ViewShot from "react-native-view-shot";
import { captureScreen } from "react-native-view-shot";
import Caption from "../Caption/Caption";
import Inputs from "../Inputs/Inputs";
import GeoLocation from "../GeoLocation/GeoLocation";
//import Images from "../Images/Images";
import RegisterDate from "../RegisterDate/RegisterDate";
import SendData from "../SendData/SendData";
import DadosRequisitos from "../DadosRequisitos/DadosRequisitos";
import Styles from "./Styles";

export default function Requisitos() {
    const [description, setDescription] = useState("");
    const [inportance, setInportance] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [endTime, setEndTime] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [uri, setUri] = useState("");

    function getGeoLocation() {
        Geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        },
            (error) => {
                console.log("error", error.message)
            },
            { enableHighAccuracy: true, timeout: 100000, maximumAge: 1000 }
        );
    };

    const viewShotRef = useRef(null);

    return (
        <View style={Styles.mainView}>
            <ScrollView>
                <ViewShot ref={viewShotRef} options={{ format: 'jpg', quality: 0.9 }}>
                    <Caption />
                    <Inputs setDescription={setDescription} setInportance={setInportance}
                        setDifficulty={setDifficulty} setEndTime={setEndTime} />
                    <GeoLocation getGeoLocation={getGeoLocation}
                        latitude={latitude} longitude={longitude} />
                    <RegisterDate />
                    <TouchableOpacity style={{ backgroundColor: "#5e00ff", marginLeft: 10, marginRight: 10, borderRadius: 5, paddingTop: 10, paddingBottom: 10, marginTop: 3 }} onPress={() => {
                        viewShotRef.current.capture().then((uri) => {
                            setUri(uri);
                        });
                    }}>
                        <Text style={{ color: "#ffffff", textAlign: "center", fontSize: 18, fontWeight: "bold" }}>Clique para tirar uma foto da tela</Text>
                    </TouchableOpacity>
                    {uri ? (
                        <View style={{justifyContent: "center", alignItems: "center", marginTop: 6}}>
                            <Image style={{ width: 100, height: 150 }} source={{ uri: uri }} />
                        </View>
                    ) : null}
                    <SendData description={description} inportance={inportance}
                        difficulty={difficulty} endTime={endTime} />
                </ViewShot>
                <DadosRequisitos description={description} inportance={inportance}
                    difficulty={difficulty} endTime={endTime}
                    setDescription={setDescription} setInportance={setInportance}
                    setDifficulty={setDifficulty} setEndTime={setEndTime} latitude={latitude} longitude={longitude} setLatitude={setLatitude} setLongitude={setLongitude} />
            </ScrollView>
        </View>
    );
};
