import React from "react";
import { Button, StyleSheet, ScrollView, Image } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types/navigation";
import { useNavigation } from "@react-navigation/core";
import ActivitiesCardsComponent from "../components/ActivitiesCardsComponent";
import ButtonComponent from "../components/ButtonComponent";
import art from "../assets/images/art.png"
import cooking from "../assets/images/cooking.png"
import music from "../assets/images/music.png"
import sport from "../assets/images/sport.png"

const artImage = Image.resolveAssetSource(art).uri
const cookingImage = Image.resolveAssetSource(cooking).uri
const musicImage = Image.resolveAssetSource(music).uri
const sportImage = Image.resolveAssetSource(sport).uri;

// dummy data
const activities = [
  {
    name: "Knitting Workshop",
    description: "knitting description",
    image: artImage,
  },
  {
    name: "BBQ Cook-Off",
    description: "bbq description",
    image: cookingImage, 
  },
  {
    name: "Live Music",
    description: "music description",
    image: musicImage,
  },
  {
    name: "Soccet Match",
    description: "soccer description",
    image: sportImage,
  },
];

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  const nav = useNavigation();

  const showActivities = () => {
    return activities.map((activity, key) => (
      <ActivitiesCardsComponent
        name={activity.name}
        description={activity.description}
        image={activity.image}
        key={key}
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
        <View style={styles.secondTopView}>
          <Text>Today's Activities</Text>
          <Text>&nbsp;see more</Text>
        </View>
        <View>
          {activities.length != 0 ? (
            showActivities()
          ) : (
            <Text>No activities yet</Text>
          )}
        </View>
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
    // flexDirection: "row",
    // flexWrap: 'wrap',
    // alignItems: "center",
    // justifyContent: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  topView: {
    padding: "5%",
  },
  secondTopView: {
    padding: "5%",
    flexDirection: "row",
    flexWrap: "wrap",
    textAlign: "center",
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
