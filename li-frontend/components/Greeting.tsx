import React from "react";
import { View, Text } from "react-native";

type GreetingProps = {
  name: string;
};

const Greeting = ({ name }: GreetingProps) => {
  return (
    <View>
      <Text  testID= "greeting-text">Hello, { name}!</Text>
    </View>
  );
};

export default Greeting;
