import React from "react";
import { View } from "react-native";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails title="Beach" src={require("../../assets/beach.jpg")} />
      <ImageDetails title="Foest" src={require("../../assets/forest.jpg")} />
      <ImageDetails
        title="Mountain"
        src={require("../../assets/mountain.jpg")}
      />
    </View>
  );
};

export default ImageScreen;
