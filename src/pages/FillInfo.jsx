import React from "react";
import { Typography, CssBaseline, Grid, Container } from "@mui/material";
import Button from "@mui/material/Button";
import ImageList from "@mui/material/ImageList";
import Box from "@mui/material/Box";
const Fill = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xs">
        <Grid container spacing={0} justifyContent="center" alignItems="center">
          <Box display="flex" justifyContent="center" alignItems="center">
            <ImageList
              styles={{ height: "1%", width: "2" }}
              align="center"
              padding="20px"
            >
              <img
                src="https://www.wmc-card.com/wp-content/uploads/2014/08/WMC_logo_short_blue_large_small.png"
                alt=""
              />
            </ImageList>
          </Box>
        </Grid>
      </Container>
      <main>
        <Container maxWidth="lg">
          <Box
            justifyContent="center"
            alignItems="center"
            styles={{
              height: "300px",
              width: { xs: 100, sm: 200, md: 800, lg: 600, xl: 1000 },
            }}
            align="center"
          >
            <img
              src="https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1083&q=80"
              alt=""
            />
          </Box>
        </Container>
        <div>
          <Container maxWidth="sm" style={{ marginTop: "40px" }}>
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Fill Your Info
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Your medical information is coded according to World Health
              Organizations global standards (ICD-10, ATC) to ensure that your
              condition and requirement is understood by health professionals
              and pharmaceutical personnel all over the Skip Tour
            </Typography>
          </Container>
        </div>
        <Grid Container spacing={2} align="center">
          <Grid item>
            <Button variant="skip">Skip Tour</Button>
          </Grid>
        </Grid>
      </main>
    </>
  );
};
export default Fill;
