import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

type props = {
    placeholder: string;
};

const Forms = ({
       placeholder,
       }: props) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <View>
            <Text>Outlined TextInput:</Text>
            <TextInput style={{...styles.style,
                outlineColor: isFocused ? '#247CE2' : '#7D7D7D'}}
                       onFocus={() => setIsFocused(true)}
                       onBlur={() => setIsFocused(false)}
                       placeholderTextColor="#7D7D7D"
                       secureTextEntry={false}
                       placeholder={placeholder}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    style: {
        backgroundColor: "white",
        outline: '#247CE2',
        color: '#black',
        borderColor: '#7D7D7D',
        borderRadius: 5,
        borderWidth: 1.5,
        padding: 10,
        alignSelf: 'stretch',
    },
//...
});

export default Forms;