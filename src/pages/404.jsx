import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box
      display={"flex"}
      my="50px"
      justifyContent="center"
      flexDirection={"column"}
      width="100%"
    >
      <Typography m="auto" variant="h1">
        404
      </Typography>
      <Typography m="auto" variant="h2">
        PAGE NOT FOUND!
      </Typography>
      <Typography m="auto" variant="h6">
        <Link m="auto" to={"/"}>
          BACK TO HOME
        </Link>
      </Typography>
    </Box>
  );
};

export default NotFound;
