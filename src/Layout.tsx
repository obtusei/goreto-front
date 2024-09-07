import { Outlet, useLocation } from "react-router-dom";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import pb from "./pocketbase";
import { useNavigate } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import { useToast } from "./hooks/use-toast";

export default function Layout() {
  const [darkMode, setDarkMode] = useState(false);
  const [navSize, setNavSize] = useState<number>(5);
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = pb.authStore.isValid;
  const { toast } = useToast();
  const handleLogout = () => {
    pb.authStore.clear();
    toast({
      title: "Logout Successfully",
      description: "You have successfully logged out",
    });
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/auth/register");
    }
  }, []);

  if (
    location.pathname == "/auth/register" ||
    location.pathname == "/auth/login"
  )
    return (
      <div>
        {" "}
        <Outlet />
        <Toaster />
      </div>
    );
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
              logout={handleLogout}
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
            logout={handleLogout}
          />
        </div>
      </div>
    </div>
  );
}
