import React from "react";

interface Employee {
  id: number;
  name: string;
  [key: string]: any; // 👈️ index signature
}

const ArrayObjectInterface = () => {
  const arr: Employee[] = [
    { id: 1, name: "Tom" },
    { id: 2, name: "Jeff", salary: 100000 },
  ];
  return (
    <>
      <div>ArrayObjectInterface</div>
      <div>
        {arr.map((data) => (
          <div key={data.id}>
            <div>{data.name}</div>
            <div>{data.salary}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ArrayObjectInterface;
