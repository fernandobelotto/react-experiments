import { ExperimentOne } from "./experiments/ExperimentOne";
import { ExperimentTwo } from "./experiments/ExperimentTwo";
import { ExperimentOneRedux } from "./experiments/experiment-redux/ExperimentOneRedux";
import { useState } from "react";
import { TodoWithRef } from "./experiments/todos/todo-with-ref";
import { TodoWithState } from "./experiments/todos/todo-with-state";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TodoWithStore } from "./experiments/todos/todo-with-store";
import { ExperimentUseEffect } from "./experiments/ExperimentUseEffect";

const MENU_ITEMS = [
  {
    reference: "experiment1",
    component: <ExperimentOne />,
  },
  {
    reference: "experiment2",
    component: <ExperimentTwo />,
  },
  {
    reference: "experiment-redux",
    component: <ExperimentOneRedux />,
  },
  {
    reference: "experiment-todo-state",
    component: <TodoWithState />,
  },
  {
    reference: "experiment-todo-ref",
    component: <TodoWithRef />,
  },
  {
    reference: "experiment-todo-store",
    component: <TodoWithStore />,
  },
  {
    reference: "experiment-use-effect",
    component: <ExperimentUseEffect />,
  },
] as const;

function App() {
  const [selectedItem, setSelectedItem] = useState<string>(
    MENU_ITEMS[0].reference
  );
  return (
    <div className="h-screen mx-auto w-screen">
      <Select value={selectedItem} onValueChange={(e) => setSelectedItem(e)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select an experiment" />
        </SelectTrigger>
        <SelectContent>
          {MENU_ITEMS.map((item) => (
            <SelectItem key={item.reference} value={item.reference}>
              {item.reference}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="h-20" />
      <div className="flex flex-1 justify-center items-center flex-col">
        {MENU_ITEMS.find((item) => item.reference === selectedItem)?.component}
      </div>
    </div>
  );
}

export default App;
