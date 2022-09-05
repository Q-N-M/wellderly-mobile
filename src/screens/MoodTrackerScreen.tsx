import { Button, StyleSheet, TextInput } from "react-native";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types/navigation";

const MoodTrackerScreen = ({
  navigation,
}: RootStackScreenProps<"MoodTracker">) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How are you feeling today?</Text>
      <Text style={styles.dateText}>Monday, August 27nd 2022</Text>
      <Text style={styles.title}>Can you tell us about it?</Text>
      <View>
        <TextInput
          style={styles.forms}
          placeholder="Type a message..."
          multiline={true}
        />
        <View style={styles.buttonContainer}>
          <Button title="Submit" />
        </View>
      </View>
    </View>
  );
};

export default MoodTrackerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    paddingLeft: 30,
  },
  title: {
    fontSize: 21,
    fontWeight: "bold",
  },
  dateText: {
    fontSize: 18,
    fontWeight: "400",
  },
  forms: {
    width: 300,
    height: 80,
    // borderColor: "#FFF",
    padding: 10,
    // borderWidth: 1,
  },
  buttonContainer: {
    width: 500,
    height: 60,
    color: "#247CE2",
    alignItems: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
