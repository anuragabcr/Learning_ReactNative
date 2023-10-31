import React from "react";
import { View, Text, Image } from "react-native";

const ImageDetails = ({ title, src }) => {
  return (
    <View>
      <Image source={src} />
      <Text>{title}</Text>
    </View>
  );
};

export default ImageDetails;
