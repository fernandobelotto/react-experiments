import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash } from "lucide-react";
import { useState } from "react";

type Todo = {
  id: string;
  title: string;
};

export const TodoWithState = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input) {
      setTodos([
        ...todos,
        {
          id: Math.random().toString(),
          title: input,
        },
      ]);
      setInput("");
    }
  };

  const handleRemoveTodo = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="flex flex-col gap-4 max-w-md mx-auto">
      <h1>todo app with state</h1>
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
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
