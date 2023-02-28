import { Box, Container, Typography } from "@mui/material";
import { useFilteredActivitiesPage } from "./useFilteredActivitiesPage";
import React from "react";

export function FilteredActivitiesPage() {
  const hook = useFilteredActivitiesPage();
  return (
    <Container>
      <Box>
        <Box>
          <Typography variant="h5" sx={{ color: "#FFFF", fontWeight: 900 }}>
            Hello world
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6">{hook.activity?.activity}</Typography>
        </Box>
      </Box>
    </Container>
  );
}
