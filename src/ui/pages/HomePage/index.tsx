import { Box, Card, Container, Typography } from "@mui/material";
import { useHomePage } from "./useHomePage";
import { HomePageCardTitle } from "../../components/HomePageCard";
export function HomePage() {
  const hook = useHomePage();
  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(221.67deg, #8C23BD 13.33%, #FE55A6 91.24%);",
          height: "90vh",
        }}
      >
        <Container sx={{ pt: "5rem" }}>
          <Box sx={{ display: "flex" }}>
            <HomePageCardTitle title="Boredom free" />
          </Box>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "#592C6D", height: "20vh" }}></Box>
    </>
  );
}
