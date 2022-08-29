import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

type props = {
  text: string;
  colors: string;
  func: () => void;
};

const ButtonComponent = ({ text, colors, func }: props) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: colors === "primary" ? "#247CE2" : "#D3455B",
        },
      ]}
      onPress={() => func()}
    >
      <Text style={styles.text}>Halo</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 15,
    width: "100%",
    borderWidth: 0,
  },
  text: {
    fontSize: 16,
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#FFFFFF",
  },
});
