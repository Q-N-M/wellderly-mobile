import { TouchableOpacity, StyleSheet, TextInput, Image } from "react-native";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types/navigation";
import React, { useState, useEffect, Component } from "react";

const MoodTrackerScreen = ({
  navigation,
}: RootStackScreenProps<"MoodTracker">) => {
  const [date, setDate] = useState("");
  const [selected, setSelected] = useState("");
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  useEffect(() => {
    let today = new Date();
    let monthName = months[today.getMonth()];
    let dayName = days[today.getDay() - 1];
    let date =
      dayName +
      ", " +
      monthName +
      " " +
      today.getDate() +
      "nd " +
      today.getFullYear();
    setDate(date);
  }, []);

  // constructor(props){
  //   super(props)
  //   this.state={
  //     selected:null
  //   }
  // }

  // handlePress = (item) => {
  //   this.setState({ selected: item })
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How are you feeling today?</Text>
      <Text style={styles.dateText}>{date}</Text>
      <View style={styles.wrapper}>
        <TouchableOpacity  onPress={() => setSelected("angry")}>
          <Image
            style={ selected === "angry" ? styles.imageOnClick : styles.imageNotOnClick}
            source={require("../assets/images/Angry.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected("sad")}>
          <Image
            style={ selected === "sad" ? styles.imageOnClick : styles.imageNotOnClick}
            source={require("../assets/images/Sad.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected("flat")}>
          <Image
            style={ selected === "flat" ? styles.imageOnClick : styles.imageNotOnClick}
            source={require("../assets/images/Flat.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected("smile")}>
          <Image
            style={ selected === "smile" ? styles.imageOnClick : styles.imageNotOnClick}
            source={require("../assets/images/Smile.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected("happy")}>
          <Image
            style={ selected === "happy" ? styles.imageOnClick : styles.imageNotOnClick}
            source={require("../assets/images/Happy.png")}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Can you tell us about it?</Text>
      <View>
        <TextInput
          style={styles.forms}
          placeholder="Type a message..."
          multiline={true}
        />
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.ButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MoodTrackerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 34,
  },
  title: {
    fontSize: 21,
    fontWeight: "bold",
  },
  dateText: {
    fontSize: 18,
    fontWeight: "400",
    fontStyle: "italic",
  },
  forms: {
    width: "100%",
    height: 80,
    color: "#7D7D7D",
    padding: 10,
    borderWidth: 1,
    marginTop: 10,
    fontStyle: "italic",
  },
  buttonContainer: {
    elevation: 8,
    backgroundColor: "#247CE2",
    borderRadius: 10,
    paddingVertical: 16.5,
    marginTop: 120,
  },
  ButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
  wrapper: {
    marginVertical: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  imageOnClick: {
    borderWidth: 5,
    borderColor: "#247CE2",
    borderRadius: 30,
  },
  imageNotOnClick: {

  },
});
