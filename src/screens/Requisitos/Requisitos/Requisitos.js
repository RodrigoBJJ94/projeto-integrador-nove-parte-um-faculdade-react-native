import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import Geolocation from "@react-native-community/geolocation";
import Caption from "../Caption/Caption";
import Inputs from "../Inputs/Inputs";
import GeoLocation from "../GeoLocation/GeoLocation";
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

    return (
        <View style={Styles.mainView}>
            <ScrollView>
                <Caption />
                <Inputs setDescription={setDescription} setInportance={setInportance}
                    setDifficulty={setDifficulty} setEndTime={setEndTime} />
                <GeoLocation getGeoLocation={getGeoLocation}
                    latitude={latitude} longitude={longitude} />
                <RegisterDate />
                <SendData description={description} inportance={inportance}
                    difficulty={difficulty} endTime={endTime} />
                <DadosRequisitos description={description} inportance={inportance}
                    difficulty={difficulty} endTime={endTime}
                    setDescription={setDescription} setInportance={setInportance}
                    setDifficulty={setDifficulty} setEndTime={setEndTime} latitude={latitude} longitude={longitude} setLatitude={setLatitude} setLongitude={setLongitude} />
            </ScrollView>
        </View>
    );
};
