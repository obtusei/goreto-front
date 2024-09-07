import { Trophy } from "lucide-react";

export default function SavedPage() {
  return (
    <div className="p-4 md:p-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-medium">Saved</h1>
        <div className="flex gap-2 items-center opacity-70j">
          <Trophy size={18} />
          <p>415 points</p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="flex items-center justify-center"></div>
    </div>
  );
}
