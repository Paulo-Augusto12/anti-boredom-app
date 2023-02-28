import { Box, Container, Typography } from "@mui/material";
import { ActivityCard } from "../../components/ActivityCard";
import { useRandomActivityPage } from "./useRandomActivityPage";

export function RandomActivityPage() {
  const hook = useRandomActivityPage();
  return (
    <Container>
      <Box sx={{ p: 3 }}>
        <Typography
          variant="h5"
          sx={{ color: "#BFD7EA", fontWeight: 900 }}
          textAlign={"center"}
        >
          {" "}
          What do you think of : {hook.activity?.activity}
        </Typography>
      </Box>
      {hook.activity ? (
        <Box>
          <ActivityCard
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
  );
}
