import React, { useState } from "react";
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const DateDropdownComponent = (props) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Date of Birth");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    setText(fDate);
    console.log(fDate);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.appButtonContainer}
        onPress={() => setShow(true)}
        activeOpacity={0.8}
      >
        <Text style={styles.appButtonText}>{text}</Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker value={date} display="default" onChange={onChange} />
      )}
    </View>
  );
};

export default DateDropdownComponent;

const styles = StyleSheet.create({
  appButtonContainer: {
    borderRadius: 8,
    borderWidth: 0.5,
    padding: 16,
    borderColor: "gray",
    margin:15
  },
  appButtonText: {
    fontSize: 16,
    color: "gray",
  },
});
