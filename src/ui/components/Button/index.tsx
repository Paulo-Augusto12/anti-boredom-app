import { Box, Button } from "@mui/material";
import { PlusCircle } from "phosphor-react";
import { useNavigate } from "react-router-dom";

interface ICustomButtonProps {
  option: "RANDOM" | "FILTERED";
  handleFunction: () => void;
}
export function CustomButton({ option, handleFunction }: ICustomButtonProps) {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Button
        sx={{
          borderRadius: "1.25rem",
          color: "#E6E6E6",
          background: "#C05BD3",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          padding: "16px 32px",
          fontWeight: 700,
          "&:hover": { background: "#AB11C8" },
          textTransform: "none",
        }}
        onClick={() => {
          handleFunction();
        }}
      >
        <PlusCircle size={"2rem"} />{" "}
        {option === "RANDOM"
          ? "Generate new random rask"
          : "Generate new filtered task"}
      </Button>
    </Box>
  );
}
