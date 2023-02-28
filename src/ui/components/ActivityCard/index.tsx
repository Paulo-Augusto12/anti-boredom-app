import { Box, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

interface IActivityCardProps {
  activityType: string;
  participants: number;
  price?: number;
  link: string;
  buttonFunction?: () => void;
}
export function ActivityCard({
  activityType,
  participants,
  buttonFunction,
}: IActivityCardProps) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
        p: { xs: "2rem", sm: "2rem", md: "4rem" },
        backgroundColor: "#BFD7EA",
        borderRadius: "30px",
      }}
    >
      <Typography variant="h5" sx={{ color: "#087E8B" }}>
        <li>This activity will improve in your {activityType} scope</li>
      </Typography>
      <Typography variant="h5" sx={{ color: "#087E8B" }}>
        <li>
          This activity can be carried out with up to {participants}{" "}
          participants
        </li>
      </Typography>
      <Box
        sx={{
          display: "flex",
          p: 2,
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "2rem",
          // backgroundColor:"#FF5A5F"
        }}
      >
        {buttonFunction ? (
          <>
            <Typography variant={"h6"} sx={{ color: "#087E8B" }}>
              Didn't like it ? you can generate another task
            </Typography>
            <Button
              sx={{
                borderRadius: "20px",
                backgroundColor: "#0B3954",
                "&:hover": { backgroundColor: "#087E8B" },
                color: "#FFFF",
              }}
              onClick={() => {
                buttonFunction();
              }}
            >
              Generate
            </Button>
            <Typography variant={"h6"} sx={{ color: "#087E8B" }}>
              Or maybe you can try add filters to see more accurate tasks
            </Typography>
            <Button
              sx={{
                borderRadius: "20px",
                backgroundColor: "#0B3954",
                "&:hover": { backgroundColor: "#087E8B" },
                color: "#FFFF",
              }}
              onClick={() => {
                navigate("/filtered/task");
              }}
            >
              Go to filtered tasks
            </Button>
          </>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
}
