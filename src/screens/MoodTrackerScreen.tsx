import {
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Alert,
  Modal,
} from "react-native";
import { Text, View } from "../components/Themed";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { RootStackScreenProps } from "../types/navigation";
import React, { useState, useEffect, Component } from "react";
import { useNavigation } from "@react-navigation/core";

const MoodTrackerScreen = ({
  navigation,
}: RootStackScreenProps<"MoodTracker">) => {
  const nav = useNavigation();
  const [date, setDate] = useState("");
  const [selected, setSelected] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
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

  const ordinalSuffix = (day: number) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  }

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
      ordinalSuffix(today.getDate()) +
      " " +
      today.getFullYear();
    setDate(date);
  }, []);

  const handlePress = () => {
    if (selected === "") {
      setModalVisible(true);
    } else {
      Alert.alert("Submit the mood?", "", [
        {
          text: "No",
          // onPress: () => setModalVisible(true),
          onPress: () => console.log(selected),
          style: "cancel",
        },
        {
          text: "Yes",
          // onPress: () => console.log("pressed"),
          onPress: () => nav.navigate("Submitted"),
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How are you feeling today?</Text>
      <Text style={styles.dateText}>{date}</Text>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => setSelected("angry")}>
          <Image
            style={
              selected === "angry"
                ? styles.imageOnClick
                : styles.imageNotOnClick
            }
            source={require("../assets/images/Angry.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected("sad")}>
          <Image
            style={
              selected === "sad" ? styles.imageOnClick : styles.imageNotOnClick
            }
            source={require("../assets/images/Sad.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected("flat")}>
          <Image
            style={
              selected === "flat" ? styles.imageOnClick : styles.imageNotOnClick
            }
            source={require("../assets/images/Flat.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected("smile")}>
          <Image
            style={
              selected === "smile"
                ? styles.imageOnClick
                : styles.imageNotOnClick
            }
            source={require("../assets/images/Smile.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected("happy")}>
          <Image
            style={
              selected === "happy"
                ? styles.imageOnClick
                : styles.imageNotOnClick
            }
            source={require("../assets/images/Happy.png")}
          />
        </TouchableOpacity>
      </View>
      {/* <Text style={styles.title}>Can you tell us about it?</Text>
      <View>
        <TextInput
          style={styles.forms}
          placeholder="Type a message..."
          multiline={true}
        />
      </View> */}
      <TouchableOpacity style={styles.buttonContainer} onPress={handlePress}>
        <Text style={styles.ButtonText}>Submit</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.warningImage}
                source={require("../assets/images/Warning.png")}
              />
            </View>
            <Text style={styles.warningTitle}>Uh-Oh!</Text>
            <Text style={styles.warningText}>
              Please pick a mood before submitting the form
            </Text>
            <TouchableOpacity
              style={[styles.warningButton]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.ButtonText}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MoodTrackerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: verticalScale(30),
  },
  title: {
    fontSize: scale(20),
    fontWeight: "bold",
  },
  dateText: {
    fontSize: scale(15),
    fontWeight: "bold",
    fontStyle: "italic",
  },
  imageOnClick: {
    borderWidth: scale(5),
    borderColor: "#247CE2",
    borderRadius: 100,
    width: scale(70),
    height: scale(70),
  },
  imageNotOnClick: {
    width: scale(69),
    height: scale(69),
  },
  forms: {
    width: "100%",
    height: 150,
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
    paddingVertical: verticalScale(10),
  },
  ButtonText: {
    fontSize: scale(20),
    color: "#fff",
    alignSelf: "center",
  },
  wrapper: {
    marginVertical: verticalScale(40),
    flexDirection: "row",
    justifyContent: "space-around",
  },
  imageContainer: {
    marginTop: verticalScale(30),
    marginBottom: verticalScale(12),
    alignItems: "center",
  },
  warningImage: {
    width: scale(75),
    height: scale(70),
  },
  warningTitle: {
    fontSize: scale(20),
    fontWeight: "bold",
    alignSelf: "center",
  },
  warningText: {
    fontSize: scale(15),
    alignSelf: "center",
  },
  warningButton: {
    elevation: 8,
    backgroundColor: "#247CE2",
    borderRadius: 10,
    paddingVertical: verticalScale(10),
    marginVertical: verticalScale(15),
    marginHorizontal: scale(50),
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#3D3D3D",
  },
  modalView: {
    flex: 1,
    margin: scale(30),
    backgroundColor: "white",
    borderRadius: 20,
    padding: scale(10),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
