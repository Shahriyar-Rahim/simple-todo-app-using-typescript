export type TodoTye = React.FormEvent<HTMLFormElement>

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export interface TodoItemProps {
    todo: Todo;
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

export type TodosReturnType = {
    todos: Todo[];
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}