import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(100);
  const [green, setGreen] = useState(100);
  const [blue, setBlue] = useState(100);

  return (
    <View>
      <ColorCounter color={"Red"} value={red} onClick={setRed} />
      <ColorCounter color={"Green"} value={green} onClick={setGreen} />
      <ColorCounter color={"Blue"} value={blue} onClick={setBlue} />
      <Text>
        Red: {red}, Green: {green}, Blue: {blue}
      </Text>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
