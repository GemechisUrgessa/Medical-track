import CustomizedAccordions from "../components/UI-components/accordion";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import faq_data from "../service/faq-data.json";

export default function FaqPage() {
  return (
    <>
      <Box my="40px" display={"flex"} justifyContent="space-between">
        <Typography variant="h3" fontWeight={"700"} m="auto">
          FAQ
        </Typography>
      </Box>
      <Box margin={6} sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {faq_data.map((accordion, index) => {
            let id = index.toString()
            return(
            <Grid key={id} item xs={4} sm={8} md={6}>
              <CustomizedAccordions
                title={accordion.title}
                detail={accordion.detail}
              />
            </Grid>
            )

            })}
        </Grid>
      </Box>
    </>
  );
}
