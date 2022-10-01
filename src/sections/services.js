import React from "react";
import { Box, Container, Grid } from "theme-ui";
import BlockTitle from "components/block-title";
import ServiceCard from "components/cards/service-card";
import serviceImage1 from "assets/service-1.png";
import serviceImage2 from "assets/service-2.png";
import serviceImage3 from "assets/service-3.png";
import serviceImage4 from "assets/service-4.png";
import serviceImage5 from "assets/service-5.png";
import serviceImage6 from "assets/service-6.png";

const SERVICES_DATA = [
  {
    image: serviceImage1,
    text: "Add and set your own background, quotes and much more.",
    heading: "Customization",
    path: "#",
  },
  {
    image: serviceImage2,
    text: "Add your own links/bookmarks and also folders (collections of links).",
    heading: "Links and Folders",
    path: "#",
  },
  {
    image: serviceImage3,
    text: "Write down and track down you tasks very easily.",
    heading: "Todo Section",
    path: "#",
  },
  {
    image: serviceImage5,
    text: "See your top emails quickly/easily.",
    heading: "Gmail Integration",
    path: "#",
    coming_soon: true,
  },
  {
    image: serviceImage6,
    text: "Get your latest calendar invites/meetings easily.",
    heading: "Google Calendar Integration",
    path: "#",
    coming_soon: true,
  },
  {
    image: serviceImage4,
    text: "See your location weather conditions easily.",
    heading: "Get weather info",
    path: "#",
    coming_soon: true,
  },
];
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        <BlockTitle
          title="What the features of product"
          text="Features are highlighted here"
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(
            ({ image, text, heading, path, coming_soon }, index) => (
              <ServiceCard
                image={image}
                text={text}
                heading={heading}
                path={path}
                coming_soon={coming_soon}
                key={index}
              />
            )
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ["80px", null, null, null, "80px", null, "100px"],
    marginBottom: "80px",
  },
  grid: {
    gridGap: "30px",
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr", null, "1fr 1fr 1fr"],
  },
};
