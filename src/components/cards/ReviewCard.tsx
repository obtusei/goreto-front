import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Rating from "../primitives/rating";
import { userInfo } from "os";

type Props = {
  title: string;
  description: string;
  rating: number;
  user: {
    name: string;
    avatar: string;
  };
  updated: string;
};

export default function ReviewCard({
  title,
  description,
  rating,
  user,
  updated,
}: Props) {
  return (
    <div className="border p-4 rounded-lg">
      <div className="flex gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-lg font-medium">{user.name}</h1>
          <div className="flex gap-2">
            <h1>{new Date(updated).toLocaleDateString()}</h1>
            <h1>Hiking</h1>
          </div>
        </div>
      </div>
      <Rating disabled value={rating} />
      <h1 className="font-medium">{title}</h1>
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
