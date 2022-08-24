import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { AuthStackScreenProps } from "../../types/navigation";

const OnboardingTwoScreen = ({
  navigation,
}: AuthStackScreenProps<"OnboardingTwo">) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yey Success!!!!</Text>
    </View>
  );
};

export default OnboardingTwoScreen;

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
