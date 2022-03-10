import React, { useState } from "react";
import { View } from "react-native";
import Caption from "../Caption/Caption";
import Inputs from "../Inputs/Inputs";
import RegisterDate from "../RegisterDate/RegisterDate";
import SendData from "../SendData/SendData";
import Styles from "./Styles";

export default function Requisitos() {
    const [description, setDescription] = useState("");
    const [inportance, setInportance] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [endTime, setEndTime] = useState("");

    return (
        <View style={Styles.mainView}>
            <Caption />
            <Inputs setDescription={setDescription} setInportance={setInportance}
                setDifficulty={setDifficulty} setEndTime={setEndTime} />
            <RegisterDate />
            <SendData description={description} inportance={inportance}
                difficulty={difficulty} endTime={endTime} />
        </View>
    );
};
