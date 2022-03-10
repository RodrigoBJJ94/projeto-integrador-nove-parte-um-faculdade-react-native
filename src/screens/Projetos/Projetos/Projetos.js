import React, { useState } from "react";
import { View } from "react-native";
import Statusbar from "../Statusbar/Statusbar";
import Caption from "../Caption/Caption";
import Input from "../Input/Input";
import StartDate from "../StartDate/StartDate";
import EndDate from "../EndDate/EndDate";
import SendData from "../SendData/SendData";
import Styles from "./Styles";

export default function Projetos() {
    const [projectName, setProjectName] = useState("");

    return (
        <View style={Styles.mainView}>
            <Statusbar />
            <Caption />
            <Input setProjectName={setProjectName} />
            <StartDate />
            <EndDate />
            <SendData projectName={projectName} />
        </View>
    );
};
