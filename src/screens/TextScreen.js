import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState();
  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newText) => setName(newText)}
        placeholder="Enter name:-"
        focus="auto"
      />
      <Text>Your Name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    color: "rgb(123,234,12)",
    borderRadius: 10,
    borderColor: "rgb(0,0,0)",
    borderWidth: 2,
  },
});

export default TextScreen;
