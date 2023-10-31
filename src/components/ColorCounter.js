import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native";

const ColorCounter = ({ color, value, onClick }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button
        title={`More  ${color}`}
        onPress={() => {
          onClick(value + 10);
        }}
      />
      <Button
        title={`Less  ${color}`}
        onPress={() => {
          onClick(value - 10);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
