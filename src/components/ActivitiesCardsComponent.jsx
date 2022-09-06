import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { Text, Card, Button, Icon } from "@rneui/themed";


export default function ActivitiesCardsComponent(props) {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Card>
            <Card.Title>{props.name}</Card.Title>
            <Card.Divider />
            <View style={styles.user}>
              {/* <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: u.avatar }}
                  /> */}
              <Text style={styles.name}>{props.description}</Text>
              <Text style={styles.name}>{props.id}</Text>
            </View>
          </Card>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
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
