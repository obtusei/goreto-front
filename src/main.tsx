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
import SavedPage from "./pages/saved/index.tsx";
import AccountPage from "./pages/account/index.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { CookiesProvider } from "react-cookie";
import Landing from "./pages/landing.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<App />} />
              <Route path="landing" element={<Landing />} />
              <Route path="auth/login" element={<LoginPage />} />
              <Route path="auth/register" element={<RegisterPage />} />
              <Route path="apps" element={<ExplorePage />} />
              <Route path="trails/:id" element={<TrailPage />} />
              <Route path="map" element={<MapPage />} />
              <Route path="saved" element={<SavedPage />} />
              <Route path="account" element={<AccountPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </CookiesProvider>
  </StrictMode>
);
