import { Button } from "@/components/ui/button";
import { memo, useState } from "react";

export const ExperimentOne = () => {
  const [user, setUser] = useState({
    name: "John",
    age: 20,
  });

  return (
    <>
      <h1>Experiment One</h1>
      <p>experiment about using </p>
      <Button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        Increase age
      </Button>
      <p>display user</p>
      <DisplayUser user={user} />

      <p>display user memo</p>
      <DisplayUserMemo user={user} />

      <p>display name</p>
      <DisplayName name={user.name} />

      <p>display name memo</p>
      <DisplayNameMemo name={user.name} />
    </>
  );
};

const DisplayUser = ({ user }: { user: { name: string; age: number } }) => {
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

const DisplayName = ({ name }: { name: string }) => {
  return <div>Name: {name}</div>;
};

const DisplayUserMemo = memo(DisplayUser);
const DisplayNameMemo = memo(DisplayName);
