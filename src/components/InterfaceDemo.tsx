import React from "react";

interface SamplePropsOne {
  name: string;
  color: string;
  age: number;
  status: "single" | "coder" | "commited";
  children?: string;
  vandna: boolean;
  //   isActive: Boolean;
  //   onClick: Function;
}

// type Props = SamplePropsOne | SamplePropsTwo;

const InterfaceDemo = ({
  color,
  name,
  age,
  status,
  children,
  vandna,
}: SamplePropsOne) => (
  //   color ? <h1>{color}</h1> : <h1>{name}</h1>;
  <div>
    <h1>Created the Interfaces </h1>
    <h2>{color}</h2>
    <h2>{name}</h2>
    <h2>{age}</h2>
    <h2>{status}</h2>
    <h2>{children}</h2>
    <h2>Boolean{vandna}</h2>
  </div>
);

export default InterfaceDemo;
