import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = ({ aboutData }) => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">{aboutData.name}</Typography>
        <p>{aboutData.ambiance.description}</p>
        <br />
        <br />

        <div>Location: {aboutData.location.address}</div>
        <br />
        <br />
        <br />
        <br />
        <div>
          <h5>About Our Chef</h5>
          <div>Chef: {aboutData.chef.name}</div>
          <div>Chef: {aboutData.chef.bio}</div>
        </div>
      </Box>
    </Layout>
  );
};

export default About;
