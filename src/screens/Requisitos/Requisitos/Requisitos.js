import React, { useState, useRef } from "react";
import { View, ScrollView } from "react-native";
import Geolocation from "@react-native-community/geolocation";
import ViewShot from "react-native-view-shot";
import Caption from "../Caption/Caption";
import Inputs from "../Inputs/Inputs";
import GeoLocation from "../GeoLocation/GeoLocation";
import Images from "../Images/Images";
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

    const viewShotRef = useRef(null);

    return (
        <View style={Styles.mainView}>
            <ScrollView>
                <ViewShot ref={viewShotRef} options={{ format: 'jpg', quality: 0.9 }}>
                    <Caption />
                    <Inputs setDescription={setDescription} setEndTime={setEndTime}
                        setDifficulty={setDifficulty} setInportance={setInportance} />
                    <GeoLocation getGeoLocation={getGeoLocation}
                        latitude={latitude} longitude={longitude} />
                    <RegisterDate />
                    <Images viewShotRef={viewShotRef} />
                    <SendData description={description} inportance={inportance}
                        difficulty={difficulty} endTime={endTime} />
                </ViewShot>
                <DadosRequisitos description={description} inportance={inportance}
                    difficulty={difficulty} endTime={endTime} setLongitude={setLongitude}
                    setDescription={setDescription} setInportance={setInportance}
                    setDifficulty={setDifficulty} setEndTime={setEndTime}
                    longitude={longitude} setLatitude={setLatitude} latitude={latitude} />
            </ScrollView>
        </View>
    );
};
