import React, { useState } from "react";
import { keyframes } from "@emotion/core";
import { Box, Container, Grid, Button, Text } from "theme-ui";
import BlockTitle from "components/block-title";
import PriceCard from "components/cards/price-card";
import priceIcon1 from "assets/price-user-1-1.svg";
import priceIcon2 from "assets/price-user-1-2.svg";

const COMPARISON_WITH_OTHER_DASHBOARDS = [
  {
    recommended: null,
    title: "Other Dashboards",
    icon: priceIcon1,
    amount: "$3.50/mo",
    options: [
      {
        status: true,
        label: "Add single links/Bookmarks.",
      },
      {
        status: true,
        label: "Add tasks/todo's.",
      },
      {
        status: true,
        label: "Add folders (multiple links to a bookmark).",
      },
      {
        status: true,
        label: "Add custom backgrounds and quotes on the homepage.",
      },
      {
        status: false,
        label: "Integrate gmail and google calendar (not available)",
      },
    ],
  },
  {
    recommended: "Recommended",
    title: "Dashlit 🚀",
    icon: priceIcon2,
    amount: "Free",
    options: [
      {
        status: true,
        label: "Add single links/Bookmarks.",
      },
      {
        status: true,
        label: "Add tasks/todo's.",
      },
      {
        status: true,
        label: "Add folders (multiple links to a bookmark).",
      },
      {
        status: true,
        label: "Add custom backgrounds and quotes on the homepage.",
      },
      {
        status: true,
        label: "Integrate gmail and google calendar (coming soon!)",
      },
    ],
  },
];

const Pricing = () => {
  return (
    <Box as="section" id="pricing" sx={styles.pricing}>
      <Container>
        <BlockTitle
          title="Why choose us?"
          text="lets see why are we a better option in the market"
        />
        <Grid sx={styles.grid}>
          {COMPARISON_WITH_OTHER_DASHBOARDS.map((price, index) => (
            <PriceCard data={price} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  pricing: {
    pt: ["200px", null, null, null, "200px", null, "240px"],
    pb: ["80px", null, null, null, "80px", "100px", "140px"],
  },
  btnWrap: {
    width: "302px",
    height: "60px",
    mt: ["-20px", null, null, "0px"],
    mb: ["40px", null, null, "60px"],
    backgroundColor: "#F7F8FB",
    borderRadius: "5px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    p: "7px",
    mx: "auto",
    button: {
      backgroundColor: "rgba(0,0,0,0)",
      borderRadius: "5px",
      color: "#0F2137",
      letterSpacing: "-0.24px",
      fontSize: "16px",
      fontWeight: 500,
      position: "relative",
      outline: "none",
      fontFamily: "DM Sans",
      transition: "all 500ms ease",
      "&.active": {
        boxShadow: "0px 3px 3.8px rgba(38, 78, 118, 0.1)",
        backgroundColor: "#ffffff",
      },
      "&:hover": {
        backgroundColor: "rgba(0,0,0,0)",
      },
    },
  },
  grid: {
    width: "100%",
    maxWidth: "960px",
    mx: ["auto"],
    gridGap: "30px",
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr"],
    ".priceCard": {
      ".priceHeader": {
        animation: `${fadeIn} 0.8s linear`,
      },
      "ul > li": {
        animation: `${fadeIn2} 0.7s linear`,
      },
      ".priceAmount": {
        animation: `${fadeIn} 0.9s linear`,
      },
      ".priceButton": {
        animation: `${fadeIn2} 0.7s linear`,
      },
    },
  },
};
