import { Box, Card, Container, Typography } from "@mui/material";
import { useHomePage } from "./useHomePage";
import { MdAddTask } from "react-icons/md";
import { OptionLinks } from "../../components/OptionLinks";
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
        <Container>
          <Card sx={{ backgroundColor: "##613C9D", p: "2rem" }}>
            <Typography variant="h4" sx={{ fontWeight: 900 }}>
              Boredom Free
            </Typography>
          </Card>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "#592C6D", height: "20vh" }}></Box>
    </>
  );
}
