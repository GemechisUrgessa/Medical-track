import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Modal from "@mui/material/Modal";
import * as React from "react";

const Footer = () => {
  const style = {
    backgroundColor: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  return (
    <>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title2"
        aria-describedby="modal-modal-description2"
      >
        <Box bgcolor={"white"} sx={style} height="60%" width={"80%"}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/VeOFAJHRM4g"
            title="World Medical Card - What is World Medical Card?"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Box>
      </Modal>
      <Box
        display={"flex"}
        // pb="50px"
        alignItems="end"
        justifyContent={"space-between"}
        flexDirection={{ xs: "column", md: "row" }}
        bgcolor={"#FFF6E0"}
        px={{ xs: "1em", md: "5em" }}
      >
        <Typography
          mb={{ xs: "30px", md: "0px" }}
          width={"40%"}
          paddingBottom="50px"
          fontSize={{ xs: "14px", md: "28px" }}
        >
          Learn More About The World Medical Card® And How To Use It
        </Typography>
        <Box
          marginBottom={"50px"}
          marginRight="30px"
          marginLeft={{ xs: "0px", md: "40px" }}
        >
          <Link
            onClick={handleOpen1}
            style={{
              borderRadius: "10px",
              textDecoration: "none",
              backgroundColor: "#a81515",
              color: "white",
              padding: "20px",
              paddingRight: "40px",
              paddingLeft: "40px",
            }}
          >
            Watch video
          </Link>
        </Box>
        <Box width={{ xs: "50%", md: "30%" }}>
          <img width={"80%"} src="images/girl.png" alt="" />
        </Box>
      </Box>

      <Box color="lightgray" bgcolor={"#13141a"}>
        <Box
          p={8}
          justifyContent="space-between"
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
        >
          <Box>
            <Typography variant="h6" fontWeight={"bold"} pb={3} color={"gray"}>
              OUR MISSION
            </Typography>
            <Typography variant="p" pb={3} color={"lightgray"}>
              Facilitate access to correct medical <br />
              information to avoid
            </Typography>
            <Box padding={2}>
              <Typography pb={1} color={"lightgray"}>
                Wrong treatment{" "}
              </Typography>
              <Typography pb={1} color={"lightgray"}>
                Wrong medication{" "}
              </Typography>
              <Typography pb={1} color={"lightgray"}>
                Loss of life{" "}
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography variant="h6" fontWeight={"bold"} pb={3} color={"gray"}>
              QUICK LINKS
            </Typography>
            <Box>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography pb={1} color={"lightgray"}>
                  Home
                </Typography>
              </Link>
              <Link to="/business" style={{ textDecoration: "none" }}>
                <Typography pb={1} color={"lightgray"}>
                  Business
                </Typography>
              </Link>
              <Link to="/professionals" style={{ textDecoration: "none" }}>
                <Typography pb={1} color={"lightgray"}>
                  Professionals
                </Typography>
              </Link>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <Typography pb={1} color={"lightgray"}>
                  About
                </Typography>
              </Link>
              <Link to="/faq" style={{ textDecoration: "none" }}>
                <Typography pb={1} color={"lightgray"}>
                  FAQ
                </Typography>
              </Link>
            </Box>
          </Box>

          <Box>
            <Typography variant="h6" fontWeight={"bold"} pb={3} color={"gray"}>
              CUSTOMER SERVICE
            </Typography>
            <Box padding={2}>
              <Typography pb={1} color={"lightgray"}>
                WMC Technologies AS
              </Typography>
              <Typography pb={1} color={"lightgray"}>
                Gamlehaugvegen 20{" "}
              </Typography>
              <Typography pb={1} color={"lightgray"}>
                5230 Paradis{" "}
              </Typography>
              <Typography pb={1} color={"lightgray"}>
                E-mail: post@wmc-card.no{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box bgcolor={"gray"} p={"1px"} mx={"36px"}></Box>
        <Box width={"75%"} py={2} margin="auto" textAlign={"center"}>
          <Typography pb={1} color={"lightgray"}>
            2021 © WMC Technologies AS. ALL Rights Reserved. <br />
            Security World Medical Card is a registered trademark of World
            Medical Center Holding S.A. The technology that is used by World
            Medical Card onMobile is protected by patents
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
