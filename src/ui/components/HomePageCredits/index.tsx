import { Box, Card, Typography } from "@mui/material";
import { TbCrown } from "react-icons/tb";

interface IHomePageCardProps {
  title: string;
}
export function HomePageCredits({ title }: IHomePageCardProps) {
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
          gap: "0.5rem",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 700, color: "#E6E6E6" }}>
          {title}
        </Typography>
        <TbCrown size={"3.75rem"} color="#E6E6E6" />
      </Box>
      <Box sx={{ flexDirection: "column", alignItems: "flex-start" }}>
        <Typography
          variant="h6"
          alignSelf={"stretch"}
          sx={{ color: "#E6E6E6", fontWeight: 700 }}
        >
          {" "}
          @Paulo-Augusto12 - Developer.
        </Typography>
        <Typography
          variant="h6"
          alignSelf={"stretch"}
          sx={{ color: "#E6E6E6", fontWeight: 700 }}
        >
          {" "}
          @pabloalbrnz - UX/UI Designer.
        </Typography>
      </Box>
    </Card>
  );
}
