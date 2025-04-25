import React from "react";
import { View, ScrollView } from "react-native";
import Task from "@/components/TodoItem";
import TaskFilter from "@/components/TodoFilter";
import Divider from "@/components/shared/Divider";
import { TodoItem, FilterType } from "@/interfaces/Todo-Interface";

/*
    Componente Hijo del componente TodoContainer.
    Permite mostrar la lista de tareas
*/
 
interface TodoListProps {
  todos: TodoItem[];
  filter: FilterType;
  onFilterChange: (filterType: FilterType) => void;
  onDeleteTask: (id: string) => void;
  onCompleteTask: (id: string) => void;
}

const TodoList = ({
  todos,
  filter,
  onFilterChange,
  onDeleteTask,
  onCompleteTask,
}: TodoListProps) => {
  return (
    <View className="flex-1 px-4 bg-white rounded-lg shadow-md p-6 m-4">
      <TaskFilter onFilterChange={onFilterChange} activeFilter={filter} />
      <Divider />

      <ScrollView
        className="flex-1 px-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {todos.map((todo: TodoItem) => (
          <Task
            key={todo.id}
            id={todo.id}
            name={todo.name}
            completed={todo.completed}
            onDelete={onDeleteTask}
            onComplete={onCompleteTask}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default TodoList; 