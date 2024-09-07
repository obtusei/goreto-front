import { Loader2Icon } from "lucide-react";

type Props = {};

export default function LoadingView({}: Props) {
  return (
    <div className="flex h-80 justify-center items-center text-primary w-full">
      <Loader2Icon className="animate-spin" />
    </div>
  );
}
