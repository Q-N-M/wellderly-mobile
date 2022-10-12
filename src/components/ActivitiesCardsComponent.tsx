import React from "react";
import { StyleSheet } from "react-native";
import { Text, Card } from "@rneui/themed";

export default function ActivitiesCardsComponent(props) {
  return (
    <Card containerStyle={{ borderRadius: 20 }}>
      <Card.Title>{props.name}</Card.Title>
      <Card.Divider />
      <Card.Image
        style={{ padding: 0 }}
        source={{
          uri: props.image,
        }}
      />
      <Text style={styles.name}>{props.description}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  activityStyle: {
    flexDirection: "row",
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});
