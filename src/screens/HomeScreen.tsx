import React from "react";
import { Button, StyleSheet, ScrollView } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types/navigation";
import { useNavigation } from "@react-navigation/core";
import ActivitiesCardsComponent from "../components/ActivitiesCardsComponent";
import ButtonComponent from "../components/ButtonComponent";

// dummy data
const activities = [
  {
    name: "knitting",
    description: "knitting description",
  },
  {
    name: "watching tv",
    description: "watching tv description",
  },
  {
    name: "knitting",
    description: "knitting description",
  },
  {
    name: "watching tv",
    description: "watching tv description",
  },
  {
    name: "watching tv",
    description: "watching tv description",
  },
];

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  const nav = useNavigation();

  const showActivities = () => {
    return activities.map((activity, key) => (
      <ActivitiesCardsComponent
        name={activity.name}
        description={activity.description}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.title}>Hello</Text>
        <Text>Blue Care Tangara Retirement Village</Text>
      </View>
      <ScrollView contentContainerStyle={styles.containerScrollView}>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />

        <View style={styles.marginActivity}></View>
        <View>
          <Text>Activities</Text>
        </View>
        <View>
          {activities.length != 0 ? (
            showActivities()
          ) : (
            <Text>No activities yet</Text>
          )}
        </View>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <View></View>
      </ScrollView>
      <View style={styles.buttonStyle}>
        <ButtonComponent
          text="mood tracker"
          colors="not-primary"
          func={() => nav.navigate("MoodTracker")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerScrollView: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  topView: {
    padding: "5%",
  },
  marginActivity: {
    margin: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
