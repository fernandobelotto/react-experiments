import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash } from "lucide-react";
import { useRef, useState } from "react";

type Todo = {
  id: string;
  title: string;
};

export const ExperimentUseDeferredValue = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = () => {
    if (inputRef.current) {
      setTodos([
        ...todos,
        {
          id: Math.random().toString(),
          title: inputRef.current.value,
        },
      ]);
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  const handleRemoveTodo = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="flex flex-col gap-4 max-w-md mx-auto">
      <h1>todo app with ref</h1>
      <Input type="text" ref={inputRef} />
      <Button onClick={handleAddTodo}>Add Todo</Button>
      <ul>
        {todos.map((t) => {
          return (
            <li key={t.id} className="flex justify-between">
              <p>{t.title}</p>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleRemoveTodo(t.id)}
              >
                <Trash />
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
