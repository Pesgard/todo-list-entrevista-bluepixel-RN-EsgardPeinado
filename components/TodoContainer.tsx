import React, { ReactNode } from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface TodoContainerProps {
  children: ReactNode;
}

const TodoContainer = ({ children }: TodoContainerProps) => {
  return (
    <View className="flex-1">
      <LinearGradient
        colors={["#5C4B99", "#6096B4"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="flex-1"
      >
        {children}
      </LinearGradient>
    </View>
  );
};

export default TodoContainer; 