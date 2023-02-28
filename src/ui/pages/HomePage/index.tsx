import { Box, Container, Typography } from "@mui/material";
import { useHomePage } from "./useHomePage";

import { MdAddTask } from "react-icons/md";
import { OptionLinks } from "../../components/OptionLinks";
export function HomePage() {
  const hook = useHomePage();
  return (
    <Container>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "3rem", p: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            p: 2,
            backgroundColor: "#BFD7EA",
            borderRadius: "30px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 4,
            }}
          >
            <Typography variant="h4" sx={{ color: "#FF5A5F", fontWeight: 800 }}>
              Bore free
            </Typography>
            <MdAddTask size={64} color={"#FF5A5F"} />
          </Box>
          <Box sx={{ display: "flex", p: 4 }}>
            <Typography variant="h5" sx={{ color: "#FF5A5F" }}>
              Get tasks suggestions to get you out of boredom
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
          {hook.options.map((option) => (
            <OptionLinks
              buttonTitle={option.button_title}
              title={option.title}
              description={option.subtitle}
              buttonNavigation={() => option.navigation()}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
}
