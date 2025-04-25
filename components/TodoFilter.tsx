/*
    Este componente se encargara de mostrar los botones para filtrar las tareas.
    Incluira botones para ver todas, completas o pendientes.
*/

import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { TodoFilterInterface, FilterType } from "@/interfaces/Todo-Interface";
import FilterButton from "./shared/FilterButton";

const TaskFilter = ({ onFilterChange, activeFilter }: TodoFilterInterface) => {
  return (
    <View className="flex-row justify-center gap-4 my-3">
      <FilterButton
        type="all"
        label="All"
        activeFilter={activeFilter}
        onPress={onFilterChange}
        activeColor="bg-blue-500"
      />

      <FilterButton
        type="completed"
        label="Completed"
        activeFilter={activeFilter}
        onPress={onFilterChange}
        activeColor="bg-green-500"
      />

      <FilterButton
        type="pending"
        label="Pending"
        activeFilter={activeFilter}
        onPress={onFilterChange}
        activeColor="bg-amber-500"
      />
    </View>
  );
};

export default TaskFilter;
