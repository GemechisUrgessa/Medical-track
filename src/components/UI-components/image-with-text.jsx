import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
const ImageWithText = () => {
  return (
    <Box
      p={6}
      py="9em"
      mx={"auto"}
      bgcolor={"#091d3e"}
      color="white"
      display={"flex"}
      justifyContent="space-around"
      flexDirection={{ xs: "column", md: "row" }}
      my={"60px"}
    >
      <Box width={"20%"} marginRight="5em">
        <img src="images/woman.png" alt="woman photo" />
      </Box>
      <Box bgcolor={"#0b234a"} p={9} width={{ xs: "100%", md: "50%" }}>
        <Typography
          textAlign={"center"}
          fontWeight="bold"
          mb="20px"
          variant="h3"
        >
          Health Professionals
        </Typography>
        <Typography m="auto" textAlign={"center"} lineHeight="30px">
          Has a patient given you his or her World Medical Card®? Or has an
          unconscious person who carries this card been brought to your
          practice? Health Professionals can use the Emergency Log-in code found
          on the WMC card. If you have not already done so, view the card and
          check the medical information printed. If needed, log in using the
          member ID and password provided. When logged in, you will find all
          health information and other data the patient has chosen to register.
          This could be their diagnoses, medications or allergies. You can also
          find their next of kin's contact information as well as other relevant
          documents, including x-rays. Our goal is to help you help the patient.{" "}
        </Typography>
      </Box>
    </Box>
  );
};

export default ImageWithText;
