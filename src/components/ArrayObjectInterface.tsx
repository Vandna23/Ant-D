import React from "react";

interface IEmployee {
  name: string;
  salary?: number;
}
const arr: IEmployee[] = [{ name: "Tom" }, { name: "Jeff", salary: 100000 }];

const ArrayObjectInterface = () => {
  return (
    <>
      <h1>These are using the Array of Objects</h1>
      <div>
        {arr.map((data, index) => (
          <div key={index}>
            <div>{data.name}</div>
            <div>{data.salary}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ArrayObjectInterface;
