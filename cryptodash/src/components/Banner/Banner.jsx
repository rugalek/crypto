import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: "url(./background_crypto.jpg)",
  },
  bannerContent: {
    height: 450,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
}));

export const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container classname={classes.bannerContent}></Container>
      <Typography
        variant="h2"
        style={{
          fontWeight: "bold",
          marginBottom: 15,
          fontFamily: "Montserrat",
        }}
      >
        CRYPTACH
      </Typography>
    </div>
  );
};
