import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../components/MainLayout";
import HomePage from "../pages/Home";
import AppInfo from "../pages/AppInfo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />}></Route>
        </Route>
        <Route path="/app" element={<AppInfo />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
