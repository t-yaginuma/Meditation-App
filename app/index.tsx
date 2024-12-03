import { View, Text, ImageBackground } from "react-native";
import React from "react";
import beachImage from "@/assets/meditation-images/beach.webp";
import "../global.css";

const index = () => {
  return (
    <View className="flex-1 h-full">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1 h-full"
      >
        <Text>index</Text>
      </ImageBackground>
    </View>
  );
};

export default index;
