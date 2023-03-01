import { Box, Container, Divider, Typography } from "@mui/material";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import { Link } from "react-router-dom";

export function Footer() {
  const firstDividerOptions = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "New Random Task",
      link: "random/task",
    },
    {
      name: "New Filtered task",
      link: "filtered/task",
    },
  ];
  return (
    <Box sx={{ backgroundColor: "#592C6D", height: "20vh", padding: "2rem" }}>
      <Container>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#C05BD3",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <MdOutlineCheckCircleOutline size={"1.5rem"} color="#C05BD3" />
            Free Boredom Tasks Suggestor
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: "1.75rem" }}>
            {firstDividerOptions.map((option) => (
              <Link to={option.link} style={{ textDecoration: "none" }}>
                <Typography
                  variant="body1"
                  sx={{ color: "#C05BD3", fontWeight: 400 }}
                >
                  {option.name}
                </Typography>
              </Link>
            ))}
          </Box>
        </Box>
        <Box></Box>
        <Box></Box>
      </Container>
    </Box>
  );
}
