import { Typography, Box, Button } from "@mui/material";

interface IOptionLinksProps {
  title: string;
  description: string;
  buttonTitle: string;
  buttonNavigation: () => void;
}
export function OptionLinks({
  buttonNavigation,
  buttonTitle,
  description,
  title,
}: IOptionLinksProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          p: 1,
        }}
      >
        <Typography
          variant={"h5"}
          sx={{ color: "#FF5A5F", fontWeight: 600 }}
          textAlign={"start"}
        >
          {title}
        </Typography>
        <Typography variant={"h6"} sx={{ color: "#FF5A5F", fontWeight: 600 }}>
          {description}
        </Typography>
      </Box>
      <Box>
        <Button
          sx={{
            backgroundColor: "#087E8B",
            color: "#FFFFFF",
            borderRadius: "30px",
          }}
          onClick={() => {
            buttonNavigation();
          }}
        >
          {buttonTitle}
        </Button>
      </Box>
    </Box>
  );
}
