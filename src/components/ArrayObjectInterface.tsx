import { ReactElement } from "react";
import SvgComponent from "../assets/svg/SvgComponent";

interface IEmployee {
  name: string;
  salary?: number;
  image?: ReactElement;
}
const arr: IEmployee[] = [
  { name: "Tom", image: <SvgComponent fill="red" /> },
  { name: "Jeff", salary: 100000 },
];

const ArrayObjectInterface = () => {
  return (
    <>
      <h1>These are using the Array of Objects</h1>
      <div>
        {arr.map((data, index) => (
          <div key={index}>
            <div>{data.name}</div>
            <div>{data.salary}</div>
            <div>{data.image}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ArrayObjectInterface;
