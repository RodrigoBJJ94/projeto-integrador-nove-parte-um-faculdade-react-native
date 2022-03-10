import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import Styles from "./Styles";

export default function EndDate() {
    const [endDate, setEndDate] = useState(false);

    function showDate() {
        setEndDate(true);
    };

    function hideDate() {
        setEndDate(false);
    };

    function confirmDate() {
        setEndDate(false);
    };

    return (
        <View style={Styles.viewEndDate}>
            <TouchableOpacity onPress={showDate} style={Styles.buttonEndDate}>
                <Text style={Styles.endDate}>Data Estimada de Entrega Final</Text>
            </TouchableOpacity>
            <DateTimePicker isVisible={endDate} mode="date"
                onConfirm={confirmDate} onCancel={hideDate} />
        </View>
    );
};
