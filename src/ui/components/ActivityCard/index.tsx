import { Box, Button, Typography } from "@mui/material";
import { Lightbulb } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import { CustomButton } from "../Button";

interface IActivityCardProps {
  activityTitle: string;
  activityType: string;
  participants: number;
  price?: number;
  link: string;
  buttonFunction: () => void;
}
export function ActivityCard({
  activityTitle,
  activityType,
  participants,
  buttonFunction,
  link,
}: IActivityCardProps) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
        p: "2rem",
        backgroundColor: "#613C9D",
        borderRadius: "30px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ color: "#e6e6e6", fontWeight: 700 }}>
          What do you think of {activityTitle} ?
        </Typography>
        <Lightbulb size={"5rem"} color="#e6e6e6" />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h5" color="#e6e6e6">
            Improvments :
          </Typography>
          <Typography variant="h6" color={"#e6e6e6"}>
            <li>
              This Activity will improve your <b> {activityType} </b> scope
            </li>
          </Typography>
          <Typography variant="h6" color={"#e6e6e6"}>
            <li>
              This Activity can be carried out with up to{" "}
              <b> {participants} </b> participant{participants > 1 ? "s" : ""}
            </li>
          </Typography>
          {link.trim().length ? (
            <Typography variant="h6" color={"#e6e6e6"}>
              <li>Here is a helpfull link about this activity {link}</li>
            </Typography>
          ) : (
            <Typography variant="h6" color={"#e6e6e6"}>
              <li>
                Unfortunally we didn't find a helpfull link about this activity{" "}
              </li>
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            outline: "3px solid #DE69F1",
            borderRadius: "2.5rem",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Typography variant="h5" color="#e6e6e6">
            Didn’t like this task? Generate another!
          </Typography>
          <CustomButton
            option="RANDOM"
            handleFunction={() => buttonFunction()}
          />
          <Typography variant="h5" color="#e6e6e6">
          You get a better result filtering scopes!
          </Typography>
          <CustomButton
            option="RANDOM"
            handleFunction={() => buttonFunction()}
          />
        </Box>
      </Box>
    </Box>
  );
}
