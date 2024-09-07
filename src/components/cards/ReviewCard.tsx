import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Rating from "../primitives/rating";
import { Ruler } from "lucide-react";

type Props = {};

export default function ReviewCard({}: Props) {
  return (
    <div className="border p-4 rounded-lg">
      <div className="flex gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-lg font-medium">Abhishek Bhatta</h1>
          <div className="flex gap-2">
            <h1>Aug 12, 2024</h1>
            <h1>Hiking</h1>
          </div>
        </div>
      </div>
      <Rating disabled />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A blanditiis
        distinctio laudantium veniam unde quisquam impedit maiores, temporibus
        exercitationem laborum minima deleniti, sunt delectus, modi at amet
        inventore iusto deserunt. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. A blanditiis distinctio laudantium veniam unde
        quisquam impedit maiores, temporibus exercitationem laborum minima
        deleniti, sunt delectus, modi at amet inventore iusto deserunt.
      </p>
      <div className="flex flex-wrap gap-10 mt-4 h-full">
        {[1, 2, 3, 4, 6, 7, 8].map((item, index) => (
          <div key={index}>
            <p className="font-medium text-sm opacity-50">Distance</p>
            <p className="font-medium text-primary">2.2 km</p>
          </div>
        ))}
      </div>
    </div>
  );
}
