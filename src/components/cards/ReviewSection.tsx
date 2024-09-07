import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import Rating from "../primitives/rating";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "../ui/progress";
type Props = {};

export default function ReviewSection({}: Props) {
  return (
    <div className="flex justify-between flex-col lg:flex-row gap-10 border-b pb-4 lg:items-center">
      {/*  */}
      <div className="flex flex-col lg:flex-row gap-10 lg:items-center w-full ">
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((item, index) => (
            <div key={index} className="flex gap-4 items-center  w-full">
              <h1 className="text-sm">{item}</h1>
              <Progress
                key={index}
                value={60 - item * 10}
                className="w-60 h-2"
              />
            </div>
          ))}
        </div>
        <div>
          <h1 className="text-5xl font-medium">4.5</h1>
          <Rating disabled />
          <h1 className="">45 reviews</h1>
        </div>
      </div>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Add Review</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Review</DialogTitle>
              <DialogDescription>
                Help others with your review on this trail.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  id="title"
                  placeholder="Great trail"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Write your review"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Rating
                </Label>
                <Rating />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Difficulty
                </Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select difficult" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="apple">Low</SelectItem>
                      <SelectItem value="banana">Medium</SelectItem>
                      <SelectItem value="blueberry">High</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
