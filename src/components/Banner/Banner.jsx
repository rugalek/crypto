import { Container, makeStyles, Typography } from "@material-ui/core";
import { Carousel } from "../Carousel";
import backgroundCoins from "./background_crypto.jpg";

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: `url(${backgroundCoins}) `,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  bannerContent: {
    height: "450px",
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
    backdropFilter: "blur(5px)",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}));

export const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
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
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the info reading the best crypto service ever!
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};
