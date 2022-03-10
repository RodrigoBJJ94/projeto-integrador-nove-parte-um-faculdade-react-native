import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import Styles from "./Styles";

export default function StartDate() {
    const [startDate, setStartDate] = useState(false);

    function showDate() {
        setStartDate(true);
    };

    function hideDate() {
        setStartDate(false);
    };

    function confirmDate() {
        setStartDate(false);
    };

    return (
        <View style={Styles.viewStartDate}>
            <TouchableOpacity onPress={showDate} style={Styles.buttonStartDate}>
                <Text style={Styles.startDate}>Data de Início</Text>
            </TouchableOpacity>
            <DateTimePicker isVisible={startDate} mode="date"
                onConfirm={confirmDate} onCancel={hideDate} />
        </View>
    );
};
