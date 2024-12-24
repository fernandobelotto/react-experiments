import { memo, useState } from "react";
import { faker } from "@faker-js/faker";
import { Button } from "@/components/ui/button";
export const ExperimentTwo = () => {
  const [user, setUser] = useState({
    name: "John",
    age: 20,
  });

  return (
    <>
      <h1>Experiment Two</h1>
      <Button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        Increase age
      </Button>
      <Button
        onClick={() => setUser({ ...user, name: faker.person.fullName() })}
      >
        Change name
      </Button>

      <p>display age</p>
      <DisplayAge age={user.age} />

      <p>display name</p>
      <DisplayName name={user.name} />

      <p>display age memo</p>
      <DisplayAgeMemo age={user.age} />

      <p>display name memo</p>
      <DisplayNameMemo name={user.name} />
    </>
  );
};

const DisplayAge = ({ age }: { age: number }) => {
  return <div>Age: {age}</div>;
};

const DisplayName = ({ name }: { name: string }) => {
  return <div>Name: {name}</div>;
};

const DisplayAgeMemo = memo(DisplayAge);
const DisplayNameMemo = memo(DisplayName);
