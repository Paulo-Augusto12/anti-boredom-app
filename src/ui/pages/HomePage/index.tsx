import { Box, Button, Container, Typography } from "@mui/material";
import { useHomePage } from "./useHomePage";
export function HomePage() {
  const hook = useHomePage();
  return (
    <Container>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <Typography variant="h4" textAlign={"center"}>
            Procure uma atividade
          </Typography>

          <Button
            onClick={() => {
              hook.handleGetARandomActivity();
            }}
          >
            Procurar
          </Button>
        </Box>
        {hook.activity ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <Typography>{hook.activity.activity}</Typography>
            <Typography>{hook.activity.type}</Typography>
            <Typography>{hook.activity.participants}</Typography>
            <Typography>{hook.activity.link}</Typography>
          </Box>
        ) : (
          <></>
        )}
      </Box>
    </Container>
  );
}
