import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.tsx";
import ExplorePage from "./pages/explore/index.tsx";
import LoginPage from "./pages/auth/login.tsx";
import RegisterPage from "./pages/auth/register.tsx";
import MapPage from "./pages/map/MapPage.tsx";
import TrailPage from "./pages/explore/trail.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="auth/login" element={<LoginPage />} />
          <Route path="auth/register" element={<RegisterPage />} />
          <Route path="apps" element={<ExplorePage />} />
          <Route path="trails/:id" element={<TrailPage />} />
          <Route path="map" element={<MapPage />} />

          {/* <Route path="apps/:slug" element={<ApplicationDetail />} /> */}
          {/* <Route path="designs" element={<Designs />} /> */}
          {/* <Route path="designs/:slug" element={<ApplicationDetail />} /> */}
          {/* <Route path="sites" element={<Websites />} /> */}
          {/* <Route path="sites/:slug" element={<ApplicationDetail />} /> */}
          {/* <Route path="sketches" element={<Sketches />} /> */}
          {/* <Route path="sketches/:slug" element={<ApplicationDetail />} /> */}
          {/* <Route path="illustrations" element={<Illustrations />} /> */}
          {/* <Route path="illustrations/:slug" element={<ApplicationDetail />} /> */}
          {/* <Route path="blogs" element={<Blogs />} /> */}
          {/* <Route path="blogs/:slug" element={<BlogDetail />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
