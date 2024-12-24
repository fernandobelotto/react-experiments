import { Button } from "@/components/ui/button";
import { increment } from "./slice";
import { useAppDispatch, useAppSelector } from "./store";

export const ExperimentOneRedux = () => {
  const dispatch = useAppDispatch();

  const handleIncreaseAge = () => {
    dispatch(increment());
  };

  return (
    <>
      <h1>Experiment One Redux</h1>
      <p>experiment about using redux</p>
      <Button onClick={handleIncreaseAge}>Increase age</Button>
      <p>display user</p>
      <DisplayUser />

      <p>display name</p>
      <DisplayName />
    </>
  );
};

const DisplayUser = () => {
  const user = useAppSelector((state) => state.user);
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

const DisplayName = () => {
  // try to destructure the name from the state and check if it re-renders when the age is changed
  const name = useAppSelector((state) => state.user.name);
  return (
    <div style={{ border: "1px solid red", padding: "10px" }}>
      <div>Name: {name}</div>
      <AnotherChild />
    </div>
  );
};

const AnotherChild = () => {
  const age = useAppSelector((state) => state.user.age);
  return (
    <div style={{ padding: "10px" }}>
      <div>Another Child {age}</div>
    </div>
  );
};
