import { Box, Container, Typography } from "@mui/material";
import { ActivityCard } from "../../components/ActivityCard";
import { useRandomActivityPage } from "./useRandomActivityPage";
import { Footer } from "../../components/Footer";

export function RandomActivityPage() {
  const hook = useRandomActivityPage();
  return (
    <Box
      sx={{
        background:
          "linear-gradient(221.67deg, #8C23BD 13.33%, #FE55A6 91.24%);",
        height: hook.activity ? "100vh" : "90vh",
      }}
    >
      <Container sx={{ pt: "5rem" }}>
        {hook.activity ? (
          <Box>
            <ActivityCard
              activityTitle={hook.activity.activity}
              activityType={hook.activity.type}
              participants={hook.activity.participants}
              link={hook.activity.link}
              buttonFunction={() => hook.handleGetARandomActivity()}
            />
          </Box>
        ) : (
          <></>
        )}
      </Container>
      {hook.activity?.activity && <Footer />}
    </Box>
  );
}
