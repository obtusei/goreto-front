import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

type Props = {};

export default function Header({}: Props) {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-medium">Explore</h1>
        <div>
          <div className="flex gap-2">
            {/* Button */}

            <Input type="search" placeholder="Search Trails, Places and All" />
            <Button>
              <Search />
            </Button>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
