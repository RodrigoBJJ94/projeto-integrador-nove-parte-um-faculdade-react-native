import React, { useState } from "react";
import { View } from "react-native";
import Title from "../Title/Title";
import Inputs from "../Inputs/Inputs";
import RegisterUser from "../RegisterUser/RegisterUser";
import LoginUser from "../LoginUser/LoginUser";
import Styles from "./Styles";

export default function Login({ navigation }) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={Styles.mainView}>
            <Title />
            <Inputs setName={setName} setPassword={setPassword} />
            <RegisterUser name={name} password={password} />
            <LoginUser name={name} password={password} navigation={navigation} />
        </View>
    );
};
