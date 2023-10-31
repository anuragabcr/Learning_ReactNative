import React from "react";
import { StyleSheet, View, Button } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Button
        title="Go To List Page"
        onPress={() => props.navigation.navigate("List")}
      />
      <Button
        title="Go To Image Page"
        onPress={() => props.navigation.navigate("Image")}
      />
      <Button
        title="Go To Counter Page"
        onPress={() => props.navigation.navigate("Counter")}
      />
      <Button
        title="Go To Color Page"
        onPress={() => props.navigation.navigate("Color")}
      />
      <Button
        title="Go To Square Page"
        onPress={() => props.navigation.navigate("Square")}
      />
      <Button
        title="Go To Text Page"
        onPress={() => props.navigation.navigate("Text")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
