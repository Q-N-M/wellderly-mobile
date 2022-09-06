import { View } from "../Themed";
import { Button, Image, TouchableOpacity, Text } from "react-native";

const art = require("../../assets/images/art.png");
const cooking = require("../../assets/images/cooking.png");
const music = require("../../assets/images/music.png");
const sport = require("../../assets/images/sport.png");

export default function Home() {
  return (
    <View>
      <Text style={{ color: "white" }}>Halo</Text>
      <Text style={{ color: "white" }}>
        Blue Care Tangara Retirement Village
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "white" }}>Today's Activities</Text>
        <Text style={{ color: "white", textAlign: "right" }}>see more</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View>
          <View style={{ marginRight: 5, marginBottom: 10 }}>
            <TouchableOpacity>
              <Image
                style={{ width: 150, height: 130, resizeMode: "contain" }}
                source={{ uri: art }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginRight: 5, marginBottom: 10 }}>
            <TouchableOpacity>
              <Image
                style={{ width: 150, height: 130, resizeMode: "contain" }}
                source={{ uri: cooking }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={{ marginRight: 5, marginBottom: 10 }}>
            <TouchableOpacity>
              <Image
                style={{ width: 150, height: 130, resizeMode: "contain" }}
                source={{ uri: music }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginRight: 5, marginBottom: 10 }}>
            <TouchableOpacity>
              <Image
                style={{ width: 150, height: 130, resizeMode: "contain" }}
                source={{ uri: sport }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Button title={"Tes"} />
    </View>
  );
}
