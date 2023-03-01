import React from "react";
import { AppRoutes } from "./ui/routes/Routes";
import { Container } from "@mui/material";
import { GlobalStyles } from "@mui/material";

function App() {
  return (
    <>
      <GlobalStyles
        styles={{
          background:
            "linear-gradient(221.67deg, #8C23BD 13.33%, #FE55A6 91.24%)",
        }}
      />
      <AppRoutes />
    </>
  );
}

export default App;
