import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import aboutParagraphs from "../service/about-data.json"
import ImageWithTextWhite from "../components/UI-components/image-with-text-white";

const About = () => {
  let title = "What is The World Medical Card.";
  let paragraph =
    "The World Medical Card® is a subscription service designed to provide you with a safer everyday life, and make health professionals able to support you fast and accurate should you find yourself in a situation where it’s required. You will have your own personal profile which can be accessed via app or browser. Enter your critical health information and keep it updated. You can chose to share your profile with relatives, travel partner or others you trust, so that they can be able to provide you with first line of support. Your medical information is coded according to World Health Organizations global standards (ICD-10, ATC) to ensure that your condition and requirement is understood by health professionals and pharmaceutical personnel all over the world. There is a built in translation function for 4 languages which will ease communication in relevant local terms. The World Medical Card makes it easy for health professionals to support you when needed.";
  let cyber_title = "Security & Privacy Regulation";
  let cyber_p1 =
    "WMC Technologies provides our customers with the highest level of security available for online data storage, including personal information and transactions. All sensitive information shared between your computer and our server is encrypted via extended SSL. Our Extended (Extended validation – EV) SSL-certificate is provided by GlobalSign. This certification ensures that all information transferred is safe and protected from third parties.  The World Medical Card® uses a technology called EV SSL (Extended Validation Secure Sockets Layer). SSL comprises a set of rules used by computers linked to the internet. These rules include:";

  return (
    <>
      <ImageWithTextWhite
        title={title}
        paragraph={paragraph}
        image={"littleGirl.png"}
      />
      <Box color={"lightGray"} bgcolor={"#33b9cb"} py={"80px"} width={"100%"}>
        <Typography
          textAlign={"center"}
          color="white"
          width={"50%"}
          margin={"auto"}
          mb="18px"
          fontSize={"26px"}
        >
          “We help people get fast and safe medical treatment by giving them an
          international health card with codes that can be read by doctors all
          over the world. In this way, we also help the doctors who treat the
          patient. ”
        </Typography>
        <Box marginY={"30px"} display={"flex"} justifyContent="center">
          <img
            width={"100px"}
            margin="auto"
            src="/images/professor.png"
            alt=""
          />
        </Box>
        <Typography
          color={"white"}
          m="auto"
          width={"95%"}
          variant="h4"
          textAlign={"center"}
        >
          Professor Michael Nobel
        </Typography>
        <Typography
          color={"black"}
          fontSize="24px"
          m="auto"
          width={"95%"}
          textAlign={"center"}
        >
          PhD, Chairman of the Board of WMC Holding
        </Typography>
      </Box>
      <Box my={"10em"} width={"100%"}>
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
      </Box>

      <Box
        bgcolor={"#0b234a"}
        py="60px"
        color={"white"}
        my={"10em"}
        width={"100%"}
      >
        <Typography
          textAlign={"center"}
          fontWeight="600"
          fontSize={"36px"}
          width="50%"
          margin={"auto"}
          mb="35px"
        >
          Our Mission is to Provide Life-Saving Information to Help People Feel
          Safe
        </Typography>
        {
          aboutParagraphs.map((object,index)=>{
            console.log( object["paragraph"]);
            let id = index.toString()
            return( <Typography key={id} variant="h6" py={1} width="80%" margin={"auto"}>{object["paragraph"]}</Typography>)
          })
          
        }

      </Box>

      <ImageWithTextWhite
        title={cyber_title}
        paragraph={cyber_p1}
        image={"cyber.png"}
      />
    </>
  );
};

export default About;
