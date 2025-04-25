
/*
    Componente Hijo del componente TodoFilter.
    Permite filtrar las tareas por tipo
*/  

import { FilterType } from "@/interfaces/Todo-Interface";
import { TouchableOpacity, Text } from "react-native";

interface FilterButtonProps {
  type: FilterType;
  label: string;
  activeFilter: FilterType;
  onPress: (type: FilterType) => void;
  activeColor: string;
}

const FilterButton = ({
  type,
  label,
  activeFilter,
  onPress,
  activeColor,
}: FilterButtonProps) => {
  const isActive = activeFilter === type;

  return (
    <TouchableOpacity
      onPress={() => onPress(type)}
      className={`px-4 py-2 rounded-full ${
        isActive ? activeColor : "bg-gray-200"
      }`}
    >
      <Text
        className={`${isActive ? "text-white font-bold" : "text-gray-800"}`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default FilterButton;
