import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import ImageWithText from "../components/UI-components/image-with-text";
import ImageWithTextWhite from "../components/UI-components/image-with-text-white";

const Professionals = () => {
  let title = "Health Institutions";
  let paragraph =
    "Health Institutions WMC Technologies provides retirement homes and health institutions a product that makes their daily lives easier and safer. With our group subscription, we provide a solution where people and patients can easily be added to the subscription. Individuals can maintain their medical records by signing into the web or app. Our goal is to make the everyday life easier for the employees and safer for the patients.";

  return (
    <>
      <Box my={"80px"} width={"100%"}>
        <Typography
          textAlign={"center"}
          fontWeight="bold"
          mb="15px"
          fontSize={"30px"}
        >
          How The World Medical Card® can be used by Health Professionals
        </Typography>
        <Typography
          textAlign={"center"}
          color="gray"
          fontWeight="600"
          mb="18px"
          fontSize={"28px"}
        >
          Get access to patient health information instantly with The World
          Medical Card®
        </Typography>
        <Typography m="auto" width={"95%"} textAlign={"center"}>
          The World Medical Card® is an unique solution for Health Professionals
          to help their patients. Here patients can safely store their essential
          health and related information. And make this available should an
          emergency situation arise. The information can be accessed via an app
          or physical card. Our solution is already used in 27 countries.{" "}
        </Typography>
        <Box display={"flex"} justifyContent="center" marginTop="40px">
          <Link
            to={"https://www.wmc-card.com/us/emergency/"}
            mx="auto"
            style={{
              borderRadius: "10px",
              textDecoration: "none",
              backgroundColor: "#a81515",
              color: "white",
              padding: "14px",
              paddingRight: "30px",
              paddingLeft: "30px",
            }}
          >
           
            Emergancy Code Access{" "}
          </Link>
        </Box>
      </Box>
      <ImageWithText />
      <ImageWithTextWhite
        title={title}
        paragraph={paragraph}
        image={"prof.png"}
      />

      <Box
        my="20px"
        width={"100%"}
        sx={{ display: "flex", justifyContent: "center" }}
      ></Box>
    </>
  );
};

export default Professionals;
