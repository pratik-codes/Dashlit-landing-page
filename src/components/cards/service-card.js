import React from "react";
import { Box, Text, Heading, Image } from "theme-ui";
import { Link } from "components/link";
import arrowAngle from "assets/arrow-angle.svg";

const ServiceCard = ({ image, text, heading, path, coming_soon }) => {
  return (
    <Box sx={styles.serviceCard}>
      <Box sx={styles.image}>
        <Image src={image} alt={heading} />
      </Box>
      <Box sx={styles.content}>
        {coming_soon && (
          <Box sx={styles.coming_soon_container}>
            <Box sx={styles.coming_soon}>Coming Soon!</Box>
          </Box>
        )}
        <Heading as="h3">{heading}</Heading>
        <Text as="p">{text}</Text>
        {/* <Link sx={styles.link} path={path}>
          Learn More <Image src={arrowAngle} alt="angle icon" />
        </Link> */}
      </Box>
    </Box>
  );
};

export default ServiceCard;

const styles = {
  serviceCard: {
    display: "flex",
    flexDirection: ["column", null, null, "row"],
    textAlign: ["center", null, null, "left"],
  },
  image: {
    flexShrink: 0,
  },
  content: {
    ml: ["0", null, null, "30px"],
    mt: ["20px", null, null, "0px"],
    h3: {
      color: "#0F2137",
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: 1,
    },
    p: {
      fontSize: "16px",
      lineHeight: 1.87,
      color: "#343D48",
      mt: "10px",
      mb: "20px",
    },
  },
  link: {
    color: "#3183FF",
    fontSize: "16px",
    fontWeight: 500,
    display: "inline-block",
    img: {
      ml: "5px",
    },
  },
  coming_soon: {
    textAlign: "center",
    color: "white",
    fontWeight: "700",
    backgroundColor: "#900000",
    borderRadius: "25px",
    width: "50%",
    marginBottom: "10px",
  },
  coming_soon_container: {
    display: "flex",
    justifyContent: ["center", null, null, "start"],
  },
};
