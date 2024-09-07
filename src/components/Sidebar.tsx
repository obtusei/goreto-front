import LogoIcon from "./icons";
import { Button } from "./ui/button";
import {
  Bookmark,
  Map,
  Moon,
  Mountain,
  Search,
  Sun,
  User2,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

type Props = {
  darkMode: boolean;
  setDarkMode: () => void;
  navSize: number;
};

export default function Sidebar({ darkMode, setDarkMode, navSize }: Props) {
  const menu = [
    {
      title: "Explore",
      icon: <Mountain />,
      href: "/",
    },
    {
      title: "Map",
      icon: <Map />,
      href: "/map",
    },
    {
      title: "Explore",
      icon: <Search />,
      href: "/search",
    },
    {
      title: "Saved",
      icon: <Bookmark />,
      href: "/saved",
    },
    {
      title: "User",
      icon: <User2 />,
      href: "/user",
    },
  ];
  const location = useLocation();
  const size = navSize > 8;
  return (
    <div className="flex justify-between items-center flex-col h-screen p-10">
      <LogoIcon size="40" />
      <div
        className={`border ${
          size ? "rounded-md" : "rounded-full "
        } flex flex-col gap-4 p-2 transition-transform duration-200`}
      >
        {menu.map((item, index) => (
          <Button
            key={index}
            size={size ? "default" : "icon"}
            className={`rounded-full duration-300 transition-transform gap-4 hover:scale-110 ${
              size ? "justify-start" : "justify-center"
            } ${
              location.pathname == item.href
                ? "bg-primary/10 text-primary"
                : "ghost"
            }`}
            variant={location.pathname == item.href ? "secondary" : "ghost"}
            asChild
          >
            <Link to={item.href} aria-label={item.title}>
              {item.icon} {size ? item.title : ""}
            </Link>
          </Button>
        ))}
      </div>
      <div>
        <Button
          variant={"ghost"}
          className="text-gray-400 transition-transform duration-300 gap-2"
          onClick={setDarkMode}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}{" "}
          {size ? (darkMode ? "Toggle Dark" : "Toggle Light") : ""}
        </Button>
      </div>
    </div>
  );
}
