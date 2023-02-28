import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RandomActivityPage } from "../pages/RandomActivitypage";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
      <Routes>
        <Route path="/random/task" element={<RandomActivityPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
