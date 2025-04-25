import { useTodos } from "@/hooks/useTodos";
import TodoContainer from "../components/TodoContainer";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";

export default function Index() {
  /*
    Hook para manejar las tareas
  */

  const {
    filteredTodos,
    filter,
    handleAddTask,
    handleDeleteTask,
    handleToggleComplete,
    handleFilterChange,
  } = useTodos();

  return (
    <TodoContainer>
      <TodoHeader onAddTodo={handleAddTask} />
      <TodoList
        todos={filteredTodos}
        filter={filter}
        onFilterChange={handleFilterChange}
        onDeleteTask={handleDeleteTask}
        onCompleteTask={handleToggleComplete}
      />
    </TodoContainer>
  );
}
