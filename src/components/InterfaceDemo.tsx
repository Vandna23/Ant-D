import React from "react";

interface SamplePropsOne {
  name: string;
  color: string;
  age: number;
  status: "single" | "coder" | "commited";
  children?: string;
  //   isActive: Boolean;
  //   onClick: Function;
}

// type Props = SamplePropsOne | SamplePropsTwo;

const InterfaceDemo = ({ color, name, age, status,children }: SamplePropsOne) => (
  //   color ? <h1>{color}</h1> : <h1>{name}</h1>;
  <div>
    <h2>{color}</h2>
    <h2>{name}</h2>
    <h2>{age}</h2>
    <h2>{status}</h2>
    <h2>{children}</h2>
  </div>
);

export default InterfaceDemo;
