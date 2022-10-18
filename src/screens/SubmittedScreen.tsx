import { StyleSheet, Image } from "react-native";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types/navigation";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { scale } from "react-native-size-matters";
import { useIsFocused } from "@react-navigation/native";

/**
 * This screen is used to show submitted screen after user press submit screen in the moodtracker screen.
 */
const SubmittedScreen = ({ navigation }: RootStackScreenProps<"Submitted">) => {
  const nav = useNavigation();
  const isFocused = useIsFocused();

  /**
   * This is used to redirect the screen back to the moodtracker screen after 3 seconds.
   */
  useEffect(() => {
    let time: NodeJS.Timeout | undefined;
    if (isFocused) {
      time = setTimeout(() => {
        nav.navigate("MoodTracker");
      }, 3000);
    }
    return () => {
      clearTimeout(time);
    };
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image
          style={styles.image}
          source={require("../assets/images/submitted.png")}
        />
      </View>
      <Text style={styles.title}>You have submitted your mood of the day!</Text>
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
    fontSize: scale(16),
    textAlign: "center",
  },
  timer: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 30,
  },
  image: {
    width: scale(100),
    height: scale(125),
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
