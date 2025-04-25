export interface TodoItem {
  id: string;
  name: string;
  completed: boolean;
}

export interface TodoInterface extends TodoItem {
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
}

export interface AddTodoInterface {
  onAddTodo: (text: string) => void;
}

export type FilterType = "all" | "completed" | "pending";

export interface TodoFilterInterface {
  onFilterChange: (filterType: FilterType) => void;
  activeFilter: FilterType;
}
