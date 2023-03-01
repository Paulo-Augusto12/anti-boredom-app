import { Box, Card, Container, Typography } from "@mui/material";
import { useHomePage } from "./useHomePage";
import { HomePageCardTitle } from "../../components/HomePageCard";
import { HomePageCredits } from "../../components/HomePageCredits";
import { OptionsCards } from "../../components/OptionsCards";
import { Footer } from "../../components/Footer";
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
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            <Box sx={{ display: "flex", flexDirection: "row", gap: "1.25rem" }}>
              <HomePageCardTitle title="Boredom free" />
              <HomePageCredits title="Created By" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "1.25rem",
              }}
            >
              <OptionsCards
                title="Random Task"
                option="RANDOM"
                description="Get a random task to help you free your freedom without get a task with specific filter category."
              />
              <OptionsCards
                title="Filter Categories"
                option="FILTER"
                description="Define a category to filter which tasks you can do, based on your mood or what you wan’t to make for now."
              />
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
