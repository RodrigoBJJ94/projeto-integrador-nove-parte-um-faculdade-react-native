import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import Statusbar from "../Statusbar/Statusbar";
import Caption from "../Caption/Caption";
import Input from "../Input/Input";
import StartDate from "../StartDate/StartDate";
import EndDate from "../EndDate/EndDate";
import Link from "../Link/Link";
import SendData from "../SendData/SendData";
import DadosProjeto from "../DadosProjeto/DadosProjeto";
import Styles from "./Styles";

export default function Projetos() {
    const [projectName, setProjectName] = useState("");
    const [link, setLink] = useState("");

    return (
        <View style={Styles.mainView}>
            <Statusbar />
            <ScrollView>
                <Caption />
                <Input setProjectName={setProjectName} />
                <StartDate />
                <EndDate />
                <Link setLink={setLink} />
                <SendData projectName={projectName} setProjectName={setProjectName} />
                <DadosProjeto projectName={projectName}
                    setProjectName={setProjectName} link={link} />
            </ScrollView>
        </View>
    );
};
