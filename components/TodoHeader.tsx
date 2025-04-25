
/*
    Este componente se encargara de mostrar el encabezado de la lista de tareas.
    Permitira Agregar una tarea Nueva
*/

import React from "react";
import { View, Text } from "react-native";
import AddTodo from "@/components/AddTodo";

interface TodoHeaderProps {
  onAddTodo: (text: string) => void;
}

const TodoHeader = ({ onAddTodo }: TodoHeaderProps) => {
  return (
    <View className="bg-white rounded-lg shadow-md p-6 m-4">
      <Text className="text-3xl font-bold text-center mb-4 text-indigo-700">
        TODO List
      </Text>
      <AddTodo onAddTodo={onAddTodo} />
    </View>
  );
};

export default TodoHeader; 