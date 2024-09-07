import React from "react";

type Props = {};

export default function FactCard({}: Props) {
  return (
    <div className="grid grid-cols-4 p-4 border-b">
      <div className="col-span-1">
        <img src="/sample_1.jpg" alt="" />
      </div>
      <div className="col-span-3 px-10">
        <h1 className="text-3xl font-bold text-primary">1.</h1>
        <h1 className="text-2xl font-medium text-primary">
          You can find rare herbs
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          reprehenderit nulla? Esse iste blanditiis inventore quos asperiores
          saepe reprehenderit quam voluptates, beatae maxime doloribus voluptate
          itaque rem error nobis numquam!
        </p>
      </div>
    </div>
  );
}
