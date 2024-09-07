import { useState } from "react";
import { Button } from "../ui/button";
import { title } from "process";

const subcriptionModels = [
  {
    title: "Free Tier",
    description: "Completely free forever",
    content: (
      <ul className="list-disc list-inside">
        <li>View Trails</li>
        <li>2 Free Trails</li>
      </ul>
    ),
  },
  {
    title: "$3 / month",
    description: "Pay small fee for Free + More",
    content: (
      <ul className="list-disc list-inside">
        <li>Go for trails</li>
        <li>Unlimited Trails</li>
        <li>Checkpoints</li>
        <li>Hotel Discounts</li>
      </ul>
    ),
  },
];

export default function SubscriptionSelection() {
  const [selected, setSelected] = useState(0);
  return (
    <div>
      <div className="flex gap-10">
        {subcriptionModels.map((item, index) => (
          <div
            onClick={() => setSelected(index)}
            className={`border p-4 cursor-pointer rounded-lg ${
              selected == index ? "border-primary text-primary" : ""
            }`}
          >
            <h1 className="text-xl font-medium">{item.title}</h1>
            <p>{item.description}</p>
            <br />
            <div>{item.content}</div>
          </div>
        ))}
      </div>
      <br />
      <Button disabled={selected == 0}>Apply</Button>
    </div>
  );
}
