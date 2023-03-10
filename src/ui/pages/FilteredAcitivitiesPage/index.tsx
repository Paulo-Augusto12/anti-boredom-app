import React from "react";
import { Box, Button, Container, Typography, Link } from "@mui/material";
import { useFilteredActivitiesPage } from "./useFilteredActivitiesPage";
import { ActivityCard } from "../../components/ActivityCard";

export function FilteredActivitiesPage() {
  const hook = useFilteredActivitiesPage();
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          p: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            // p: 4,
            backgroundColor: "#BFD7EA",
            borderRadius: "30px",
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "column", p: 2, gap: "3rem" }}
          >
            <Typography variant="h5" sx={{ color: "#FFFF", fontWeight: 900 }}>
              Filter a scope of task
              <Typography variant="h6" sx={{ color: "#FFFF", fontWeight: 600 }}>
                Get a Task based on a defined scope
              </Typography>
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                flexDirection: { xs: "column", sm: "column", md: "row" },
              }}
            >
              {hook.apiAvailableTypes.map((option) => (
                <Link href="#generatedTask" underline="none">
                  <Button
                    sx={{
                      borderRadius: "20px",
                      backgroundColor: "#0B3954",
                      "&:hover": { backgroundColor: "#087E8B" },
                      color: "#FFFF",
                      width: "100%",
                    }}
                    onClick={() => {
                      hook.generateATypeFilteredActivity(option);
                    }}
                  >
                    {option}
                  </Button>
                </Link>
              ))}
            </Box>
            {hook.activity ? (
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  id="generatedTask"
                >
                  <Box>
                    <Typography
                      variant={"h6"}
                      sx={{ color: "#087E8B", fontWeight: 700 }}
                      textAlign={"center"}
                    >
                      What do you think of : {hook.activity.activity}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <ActivityCard
                    activityType={hook.activity.type}
                    participants={hook.activity.participants}
                    link={hook.activity.link}
                  />
                </Box>
              </>
            ) : (
              <></>
            )}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
