import React from "react";
import { FlatList } from "react-native";
import { Text } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend 1" },
    { name: "Friend 2" },
    { name: "Friend 3" },
    { name: "Friend 4" },
    { name: "Friend 5" },
  ];
  return (
    <FlatList
      data={friends}
      keyExtractor={(friends) => friends.name}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  );
};

export default ListScreen;
