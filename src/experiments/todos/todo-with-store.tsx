import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../experiment-redux/store";
import { addTodo, removeTodo, selectTodos } from "./slice";
import { Trash } from "lucide-react";

export const TodoWithStore = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      dispatch(
        addTodo({
          id: Math.random().toString(),
          title: inputRef.current.value,
        })
      );
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex flex-col gap-4 max-w-md mx-auto">
      <h1>todo app with ref</h1>
      <form onSubmit={handleAddTodo}>
        <Input type="text" ref={inputRef} />
        <Button type="submit">Add Todo</Button>
      </form>
      <TodoList />
    </div>
  );
};

const TodoList = () => {
  const todos = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();
  return (
    <ul>
      {todos.map((t) => (
        <li key={t.id}>
          {t.title}
          <Button
            variant="outline"
            size="icon"
            onClick={() => dispatch(removeTodo(t.id))}
          >
            <Trash />
          </Button>
        </li>
      ))}
    </ul>
  );
};
