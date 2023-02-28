import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
