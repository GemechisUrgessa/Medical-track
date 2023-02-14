import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ImageWithTextWhite from "../components/UI-components/image-with-text-white";
import ImageWithText2 from "../components/UI-components/image-with-text2";

const Business = () => {
  let title = "World Medical Card® Business Solutions";
  let paragraph =
    "WORLD MEDICAL CARD® – DEALING WITH RISK The World Medical Card provides unique business solutions where employees can safely store their essential health and related information to make this available should an emergency situation arise. This information can be accessed via an app or physical card.";
  let paragraph2 =
    " COMMUNICATION PROBLEMS AND LANGUAGE BARRIERS Incorrect or missing information required in an emergency increases the risk of wrong treatment being applied and can have severe consequences. By carrying the World Medical Card®, your critical information will always be available and understood by health Business all over the world.  Not having access to correct and updated medical information in critical situations results in lost  time and waste of resources in search, rather than providing required treatment. In worst case this can lead to loss of life. Make sure that health Business get the best support to help you!";

  let title_bottom = "It’s easy to be prepared";
  let paragraph_bottom =
    "The World Medical Card® is always available via mobile, PC or card The World Medical Card® is easy to share. Your employees do not have to worry about remember the medications they need or what treatments may be harmful to them. If they have had e.g. a shoulder operation in their home country, it can be documented so that health all personnel all over the world will and understand know this. All current insurances and treatment agreements can be uploaded. Employees food allergies are translated so they are completely confident that everyone understands what allergies they have. Gluten, nut allergies, and other less common allergies are easily translated. It is easy to register and keep relevant information up to date – all information is gathered in one place. Let The World Medical Card® Business Solutions help your employees. Understanding Medical needs are understood, anywhere, around the clock.";
  return (
    <>
      <ImageWithTextWhite
        title={title}
        paragraph={paragraph}
        paragraph2={paragraph2}
        image={"business.png"}
      />
      <ImageWithText2 />

      <ImageWithTextWhite
        title={title_bottom}
        paragraph={paragraph_bottom}
        image={"phone.jpg"}
      />

      <Box bgcolor={"#f8f8f8"} py={"10em"} width={"100%"}>
        <Typography
          textAlign={"center"}
          width="60%"
          mx={"auto"}
          fontWeight="800"
          mb="35px"
          variant="h3"
        >
          8 REASONS TO ORDER WORLD MEDICAL CARD®
        </Typography>
        <Typography m="auto" width={"75%"} textAlign={"center"}>
          World Medical Card® is always available via app, PC or a physical
          card. You can upload your personal medical information, coded so that
          you are understood by healthcare professionals – anywhere in the
          world, around the clock.
          <br />
          <br />
          Let your employees try World Medical Card Business Solutions
          <br />
          You choose what information you want, including:
          <br /> <br />
          Covid vaccine documentation
          <br />
          Important allergies
          <br />
          Important medications you must have
          <br />
          Contact information for relatives
          <br />
          Emergency button for relatives
          <br />
          Insurance information
          <br />
          Donor information
          <br />
          Optical prescriptions <br />
        </Typography>
      </Box>
    </>
  );
};

export default Business;
