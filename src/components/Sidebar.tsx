import LogoIcon from "./icons";
import { Button } from "./ui/button";
import {
  Bookmark,
  LogOut,
  Map,
  Moon,
  Mountain,
  Sun,
  User2,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

type Props = {
  darkMode: boolean;
  setDarkMode: () => void;
  navSize: number;
  logout: () => void;
};

export default function Sidebar({
  darkMode,
  setDarkMode,
  navSize,
  logout,
}: Props) {
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
      title: "Saved",
      icon: <Bookmark />,
      href: "/saved",
    },
    {
      title: "User",
      icon: <User2 />,
      href: "/account",
    },
  ];
  const location = useLocation();
  const size = navSize > 8;
  return (
    <div className="flex justify-between items-center bg-white dark:bg-slate-900 lg:bg-transparent fixed lg:relative inset-x-0 bottom-0 lg:flex-col lg:h-screen p-2 lg:p-6">
      <div className="hidden lg:block">
        <LogoIcon size="40" />
      </div>
      <div className="flex fixed lg:relative bottom-2 inset-x-2 lg:flex-col items-center gap-4">
        <Button variant={"ghost"} size={"icon"} asChild>
          <Link to={"/"}>
            <span className="relative flex h-6 w-6">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-6 w-6 bg-primary items-center justify-center">
                <div className="bg-white w-2 h-2 rounded-full"></div>
              </span>
            </span>
          </Link>
        </Button>
        <div
          className={`border ${
            size ? "rounded-md" : " rounded-2xl lg:rounded-full "
          } flex lg:flex-col gap-4 p-2 w-full lg:w-fit justify-between lg:justify-center transition-transform duration-200`}
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
      </div>
      <div className="hidden lg:block space-y-4">
        <Button
          variant={"ghost"}
          className="text-gray-400 transition-transform duration-300 gap-2"
          onClick={setDarkMode}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}{" "}
          {size ? (darkMode ? "Toggle Dark" : "Toggle Light") : ""}
        </Button>
        <Button
          variant={"ghost"}
          className="text-gray-400 transition-transform duration-300 gap-2"
          onClick={logout}
        >
          <LogOut className="text-red-600" />
          {size ? "Logout" : ""}
        </Button>
      </div>
    </div>
  );
}
