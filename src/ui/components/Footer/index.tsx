import { Box, Container, Divider, Typography } from "@mui/material";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import { SlBriefcase } from "react-icons/sl";
import { Link } from "react-router-dom";
import { BsArrowUpRightCircle } from "react-icons/bs";

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

  const projectOptions = [
    {
      name: "Pokedex",
      link: "https://paulo-augusto12.github.io/Pokedex/",
    },
    {
      name: "City Weather",
      link: "https://city-weather-lac.vercel.app/",
    },
  ];

  const portfolioOptions = [
    {
      name: "Git Hub",
      link: "https://github.com/Paulo-Augusto12",
    },
    {
      name: "Discord",
      link: "",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/paulo_ri7",
    },
  ];
  return (
    <Box sx={{ backgroundColor: "#592C6D", height: "20vh", padding: "2rem" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
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
        <Box>
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
            <SlBriefcase size={"1.5rem"} color="#C05BD3" />
            More Projects
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: "1.75rem" }}>
            {projectOptions.map((option) => (
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
        <Box>
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
            <BsArrowUpRightCircle size={"1.5rem"} color="#C05BD3" />
            Portfolio
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: "1.75rem" }}>
            {portfolioOptions.map((option) => (
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
      </Container>
    </Box>
  );
}
