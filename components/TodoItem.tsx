/*
    Este componente se encargara de mostrar una tarea en la lista de tareas.
    Recibira como props el id de la tarea, el nombre de la tarea y el estado de la tarea.
    Ademas de una funcion para eliminar la tarea y otra para marcarla como completada.
*/
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { TodoInterface } from "@/interfaces/Todo-Interface";
import { Ionicons } from "@expo/vector-icons";

const Task = ({ id, name, completed, onDelete, onComplete }: TodoInterface) => {
  return (
    <View className="flex-row items-center justify-between p-4 border-b border-gray-200">
      <Text className="text-base flex-1">{name}</Text>

      {/* Botone de cambiar estado de la tarea */}
      <View className="flex-row items-center gap-4">
        <TouchableOpacity
          onPress={() => onComplete(id)}
          className={`rounded-lg px-3 py-1 ${
            completed ? "bg-green-200" : "bg-blue-200"
          }`}
        >
          <Text className="text-sm">{completed ? "Completed" : "pending"}</Text>
        </TouchableOpacity>

        {/* Eliminar tarea */}
        <TouchableOpacity onPress={() => onDelete(id)}>
          <Ionicons name="trash-outline" size={24} color="#FF6B6B" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Task;
