import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
const ImageWithTextWhite = ({ title, paragraph, image, paragraph2 }) => {
  return (
    <Box
      p={6}
      py="9em"
      mx={"auto"}
      color="black"
      display={"flex"}
      justifyContent="space-between"
      flexDirection={{ xs: "column", lg: "row" }}
      my={"20px"}
    >
      <Box width={"20%"} marginLeft="5em">
        <img src={`images/${image}`} alt={`images ${image}`} />
      </Box>
      <Box p={5} width={{ xs: "100%", md: "50%" }}>
        <Typography mb="20px" variant="h4">
          {title}
        </Typography>
        <Typography variant="p" m="auto" textAlign={"start"} lineHeight="35px">
          {paragraph} <br /> <br />
          {paragraph2}
        </Typography>
      </Box>
    </Box>
  );
};

export default ImageWithTextWhite;
