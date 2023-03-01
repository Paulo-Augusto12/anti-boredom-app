import { Typography, Box, Button, Card } from "@mui/material";
import { FaRandom } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { PlusCircle, ShuffleSimple } from "phosphor-react";

interface IOPtionCardsProps {
  title: string;
  option: "RANDOM" | "FILTER";
  description: string;
}
export function OptionsCards({
  title,
  option,
  description,
}: IOPtionCardsProps) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        backgroundColor: "#613C9D",
        p: "2rem",
        borderRadius: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "6.4375rem",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 700, color: "#E6E6E6" }}>
          {title}
        </Typography>
        <Box>
          {option === "RANDOM" ? (
            <ShuffleSimple size={"3.75rem"} color="#E6E6E6" />
          ) : (
            <FiFilter size={"3.75rem"} color="#E6E6E6" />
          )}
        </Box>
      </Box>
      <Typography
        variant="h6"
        alignSelf={"stretch"}
        sx={{ color: "#E6E6E6", fontWeight: 400 }}
      >
        {description}
      </Typography>
      <Box></Box>
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
            option === "RANDOM"
              ? navigate("/random/task")
              : navigate("/filtered/task");
          }}
        >
          <PlusCircle size={"2rem"} />{" "}
          {option === "RANDOM" ? "New Random Task" : "New Filtered Task"}
        </Button>
      </Box>
    </Card>
  );
}
