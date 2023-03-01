import { Box, Card, Typography } from "@mui/material";
import { MdOutlineCheckCircleOutline } from "react-icons/md";

interface IHomePageCardProps {
  title: string;
}
export function HomePageCardTitle({ title }: IHomePageCardProps) {
  return (
    <Card
      sx={{
        backgroundColor: "#613C9D",
        p: "2rem",
        borderRadius: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "2.8125rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "111px",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700, color: "#E6E6E6" }}>
          {title}
        </Typography>
        <MdOutlineCheckCircleOutline size={"3.75rem"} color="#E6E6E6" />
      </Box>
      <Box>
        <Typography
          variant="h6"
          alignSelf={"stretch"}
          sx={{ color: "#E6E6E6", fontWeight: 400 }}
        >
          Using this app you will get some task suggestion to get out of your
          boredom.
        </Typography>
      </Box>
    </Card>
  );
}
