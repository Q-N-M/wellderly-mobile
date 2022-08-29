import { StyleSheet, TextInput } from "react-native";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types/navigation";

const MoodTrackerScreen = ({
  navigation,
}: RootStackScreenProps<"MoodTracker">) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How are you feeling today?</Text>
      <Text style={styles.title}>Monday, August 27nd 2022</Text>
      <Text style={styles.title}>Can you tell us about it?</Text>
      <TextInput placeholder="Type a message..." />
    </View>
  );
};

export default MoodTrackerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
