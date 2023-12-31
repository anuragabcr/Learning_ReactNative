import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomRGB()]);
        }}
      />
      {colors.map((color, index) => (
        <View
          key={index}
          style={{ height: 100, width: 100, backgroundColor: color }}
        />
      ))}
    </View>
  );
};

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
