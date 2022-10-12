import { Text, View, Image, StyleSheet } from "react-native";
import Constants from "expo-constants";

type props = {
  title: string;
  subtitle: string;
  img: string;
};

const OnBoarding = ({ title, subtitle, img }: props) => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 300,
          height: 300,
          resizeMode: "contain",
        }}
        source={{ uri: `${img}` }}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    textAlign: "center",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  title: {
    margin: 5,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default OnBoarding;
