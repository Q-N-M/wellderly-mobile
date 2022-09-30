import {
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Alert,
  Modal,
} from "react-native";
import { Text, View } from "../components/Themed";
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

  const handlePress = () => {
    if (selected === "") {
      setModalVisible(true);
    } else {
      Alert.alert("Udahkan?", "", [
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
    paddingHorizontal: 95,
  },
  title: {
    fontSize: 66,
    fontWeight: "bold",
  },
  dateText: {
    fontSize: 55,
    fontWeight: "400",
    fontStyle: "italic",
  },
  imageOnClick: {
    borderWidth: 10,
    borderColor: "#247CE2",
    borderRadius: 100,
    width: 150,
    height: 150,
  },
  imageNotOnClick: {
    width: 150,
    height: 150,
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
    paddingVertical: 25,
  },
  ButtonText: {
    fontSize: 50,
    color: "#fff",
    alignSelf: "center",
  },
  wrapper: {
    marginVertical: 80,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  imageContainer: {
    marginTop: 80,
    marginBottom: 30,
    alignItems: "center",
  },
  warningImage: {
    width: 195,
    height: 180,
  },
  warningTitle: {
    fontSize: 50,
    fontWeight: "bold",
    alignSelf: "center",
  },
  warningText: {
    fontSize: 30,
    alignSelf: "center",
  },
  warningButton: {
    elevation: 8,
    backgroundColor: "#247CE2",
    borderRadius: 10,
    paddingVertical: 25,
    marginVertical: 40,
    marginHorizontal: 200,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#3D3D3D",
  },
  modalView: {
    flex: 1,
    margin: 82,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
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
