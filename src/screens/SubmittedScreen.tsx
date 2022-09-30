import { TouchableOpacity, StyleSheet, Image } from "react-native";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types/navigation";
import React, { useState, useEffect, Component } from "react";
import { useNavigation } from "@react-navigation/core";
import MoodTracker from "./MoodTrackerScreen";

const SubmittedScreen = ({ navigation }: RootStackScreenProps<"Submitted">) => {
  const nav = useNavigation();
  const [number, setNumber] = useState(5);
  const time = setTimeout(() => {
    nav.navigate("MoodTracker");
  }, 6000);
  // clearTimeout(time);
  setTimeout(() => {
    setNumber(number - 1);
  }, 1000);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image
          style={styles.image}
          source={require("../assets/images/submitted.png")}
        />
      </View>
      <Text style={styles.title}>You have submitted your mood of the day!</Text>
      {/* <Text style={styles.timer}>{number}</Text> */}
      {/* <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => nav.navigate("MoodTracker")}
      >
        <Text style={styles.ButtonText}>-_-</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default SubmittedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 34,
  },
  title: {
    fontSize: 48,
    textAlign: "center",
  },
  timer: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 30,
  },
  image: {
    width: 342,
    height: 433,
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
});
