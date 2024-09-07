import { Outlet } from "react-router-dom";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

type Props = {};

export default function Layout({}: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const [navSize, setNavSize] = useState<number>(5);
  return (
    <div>
      <div className="hidden lg:block">
        <ResizablePanelGroup direction="horizontal" className="h-screen">
          <ResizablePanel
            minSize={5}
            defaultSize={5}
            maxSize={10}
            onResize={(size) => {
              setNavSize(size);
            }}
          >
            <Sidebar
              darkMode={darkMode}
              setDarkMode={() => {
                setDarkMode(!darkMode);
              }}
              navSize={navSize}
            />
          </ResizablePanel>
          <ResizableHandle className="hover:bg-primary active:bg-primary" />
          <ResizablePanel>
            <Outlet />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <div className="block lg:hidden">
        <Outlet />
        <div>
          <Sidebar
            darkMode={darkMode}
            setDarkMode={() => {
              setDarkMode(!darkMode);
            }}
            navSize={navSize}
          />
        </div>
      </div>
    </div>
  );
}
