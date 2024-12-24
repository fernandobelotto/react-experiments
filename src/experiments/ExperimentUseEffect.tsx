import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const ExperimentUseEffect = () => {
  const [user, setUser] = useState({
    name: "John",
    age: 20,
  });

  // useEffect(() => {
  //   console.log("user changed", user);
  // }, [user]);

  useEffect(() => {
    console.log("name changed", user.name);
  }, [user.name]);

  // useEffect(() => {
  //   console.log("age changed", user.age);
  // }, [user.age]);

  return (
    <>
      <h1>Experiment Use Effect {user.name}</h1>
      <p>experiment about using useEffect depend on state</p>
      <p>
        check the code at src/experiments/ExperimentUseEffect.tsx and the logs
      </p>

      <Button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        Increase age
      </Button>
    </>
  );
};
