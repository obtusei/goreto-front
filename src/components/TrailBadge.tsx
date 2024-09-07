import { ReactNode } from "react";

type Props = {
  title: string;
  value: string;
  icon: ReactNode;
};

export default function TrailBadge({ title, value, icon }: Props) {
  return (
    <div className="flex items-center gap-2">
      <div className="p-4 bg-primary/10 w-fit text-primary rounded-full">
        {icon}
      </div>
      <div>
        <p className="font-medium text-sm opacity-50">{title}</p>
        <p className="font-medium text-primary">{value}</p>
      </div>
    </div>
  );
}
