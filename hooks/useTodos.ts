import { useState, useEffect } from "react";
import { FilterType, TodoItem } from "@/interfaces/Todo-Interface";
import AsyncStorage from "@react-native-async-storage/async-storage";

/*
    Hook para manejar las tareas
*/

const STORAGE_KEY = "@todos_data";

export function useTodos() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [filter, setFilter] = useState<FilterType>("all");
  const [isLoading, setIsLoading] = useState(true);

  // Load todos from AsyncStorage on component mount
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedTodos) {
          setTodos(JSON.parse(storedTodos));
        }
      } catch (error) {
        console.error("Error loading todos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTodos();
  }, []);

  // Save todos to AsyncStorage whenever it changes
  useEffect(() => {
    const saveTodos = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
      } catch (error) {
        console.error("Error saving todos:", error);
      }
    };

    if (!isLoading) {
      saveTodos();
    }
  }, [todos, isLoading]);

  // Add a new task
  const handleAddTask = (taskText: string) => {
    const newTask: TodoItem = {
      id: Date.now().toString(),
      name: taskText,
      completed: false,
    };
    setTodos([...todos, newTask]);
  };

  // Delete a task
  const handleDeleteTask = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle task completion status
  const handleToggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Handle filter change
  const handleFilterChange = (filterType: FilterType) => {
    setFilter(filterType);
  };

  // Filter tasks based on current filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return {
    todos,
    filter,
    filteredTodos,
    handleAddTask,
    handleDeleteTask,
    handleToggleComplete,
    handleFilterChange,
    isLoading,
  };
}
export { TodoItem };
