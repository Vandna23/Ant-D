import React, { useState } from "react";
import { Card, Checkbox } from "antd";

const { Meta } = Card;
interface IData {
  checked: boolean;
  cover: string;
  title: string;
  description: string;
}

const CardData = [
  {
    checked: false,
    cover: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    title: "Nepal ",
    description: "www.instagram.com",
  },
  {
    checked: false,
    cover: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    title: "Europe ",
    description: "www.instagram.com",
  },
  {
    checked: false,
    cover: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    title: "Australia ",
    description: "www.instagram.com",
  },
  {
    checked: false,
    cover: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    title: "India ",
    description: "www.instagram.com",
  },
  {
    checked: false,
    cover: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    title: "Spanish ",
    description: "www.instagram.com",
  },
  {
    checked: false,
    cover: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    title: "USA ",
    description: "www.instagram.com",
  },
  {
    checked: false,
    cover: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    title: "UK ",
    description: "www.instagram.com",
  },
];

const Cards = () => {
  const [array, setArray] = useState<IData[]>(CardData);

  const onChange = (index: number) => {
    const newArray = [...array];
    newArray.map((item: IData, i: number) => {
      if (i === index) {
        item.checked = true;
      } else {
        item.checked = false;
      }
    });
    setArray(newArray);
    console.log("newArray", newArray);
  };
  return (
    <div>
      {array.map((data: IData, index: number) => {
        console.log("index", index);
        console.log("data", data);
        return (
          <Card
            key={index}
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={data?.cover} />}
            onClick={() => onChange(index)}
          >
            <Meta title={data.title} description={data.description} />

            {data.checked ? (
              <Checkbox checked={data.checked}>Click</Checkbox>
            ) : null}
          </Card>
        );
      })}
      ;
    </div>
  );
};

export default Cards;
