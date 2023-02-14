import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
const ImageWithText2 = () => {
  return (
    <Box
      py="9em"
      width={"100%"}
      mx={"auto"}
      bgcolor={"#091d3e"}
      color="white"
      display={"flex"}
      justifyContent="space-around"
      flexDirection={{ xs: "column", md: "row" }}
      mt={"60px"}
    >
      <Box width={{ xs: "100%", md: "40%" }}>
        <Typography
          textAlign={"start"}
          fontWeight="bold"
          mb="20px"
          variant="h4"
        >
          Safety in everyday life for your employees
        </Typography>
        <Typography m="auto" textAlign={"start"} lineHeight="30px">
          Help your employee reduce the risk of injury and illness with The
          World Medical Card® Business Solutions. This user-controlled medical
          record is a great tool. If you have temporary employees in your
          company, it is important that they can communicate any illnesses,
          ailments and allergies with you, pharmacies and health personnel.
          <br />
          <br />
          <b>SAFETY </b>
          <br />
          <br />
          You never know when your employees will need critical medical
          information. The World Medical Card® ensures that it is available when
          it is needed most. Employees post what they think is important and
          relevant to their digital medical profile that they always have
          available, both as an app on the phone and as a physical card.
          <br />
          <br />
          The app also has a one-click call button with their map location that
          is sent to their emergency contacts on record. The World Medical Card®
          is a service that complements health insurance, travel/accident
          insurance, local health and emergency apps.
        </Typography>
      </Box>
      <Box>
        <img src="images/bus2.png" alt="woman photo" />
      </Box>
    </Box>
  );
};

export default ImageWithText2;
