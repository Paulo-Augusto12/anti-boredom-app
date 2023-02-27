import { Box, Button, Container, Typography } from "@mui/material";
import { useHomePage } from "./useHomePage";

import { MdAddTask } from "react-icons/md";
export function HomePage() {
  const hook = useHomePage();
  return (
    <Container>
      <Box sx={{ display: "flex", flexDirection: "row", gap: "3rem", p: 2 }}>
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
            <Typography variant="h4" sx={{ color: "#C81D25", fontWeight: 800 }}>
              Anti Bored
            </Typography>
            <MdAddTask size={64} color={"#FF5A5F"} />
          </Box>
          <Typography variant="h5" sx={{ color: "#FF5A5F" }}>
            Veja sugestões de tarefas para te tirar do tédio
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
