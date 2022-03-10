import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import Styles from "./Styles";

export default function RegisterDate() {
    const [registerDate, setRegisterDate] = useState(false);

    function showDate() {
        setRegisterDate(true);
    };

    function hideDate() {
        setRegisterDate(false);
    };

    function confirmDate() {
        setRegisterDate(false);
    };

    return (
        <View style={Styles.viewRegisterDate}>
            <TouchableOpacity onPress={showDate} style={Styles.buttonRegisterDate}>
                <Text style={Styles.registerDate}>Data do Registro</Text>
            </TouchableOpacity>
            <DateTimePicker isVisible={registerDate} mode="date"
                onConfirm={confirmDate} onCancel={hideDate} />
        </View>
    );
};
