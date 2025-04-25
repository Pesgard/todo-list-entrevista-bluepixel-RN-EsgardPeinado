/*
  Componente Hijo del componente TodoHeader.
  Permite agregar una tarea nueva
*/

import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { AddTodoInterface } from "@/interfaces/Todo-Interface";

const AddTodo = ({ onAddTodo }: AddTodoInterface) => {
  const [todoText, setTodoText] = useState<string>("");

  const handleAddTodo = () => {
    if (todoText.trim()) {
      onAddTodo(todoText);
      setTodoText("");
    }
  };

  return (
    <View className="mb-6 mt-2">
      <TextInput
        className="border-b border-gray-300 p-2 text-base"
        placeholder="What would you like to do?"
        value={todoText}
        onChangeText={setTodoText}
      />
      <TouchableOpacity
        onPress={handleAddTodo}
        className="bg-red-400 rounded-md py-3 mt-4 items-center"
      >
        <Text className="text-white font-medium">Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;
