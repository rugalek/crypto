import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import { SingleCoin } from "../config/api";
import { CryptoState } from "../CryptoContext";
import { useState, useEffect } from "react";
import { makeStyles, Typography, LinearProgress } from "@material-ui/core";
import { CoinInfo } from "../components/CoinInfo";
import ReactHtmlParcer from "react-html-parser";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
      },
    },
    sidebar: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 25,
      borderRight: "2px solid grey",
      width: "30%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
    description: {
      width: "100%",
      fontFamily: "Montserrat",
      padding: 25,
      pddingBottom: 15,
      paddingTop: 0,
      textAlign: "justify",
    },
    header: {
      fontWeight: "bold",
      marginBottom: 20,
      fontFamily: "Montserrat",
    },
    marketData: {
      width: "100%",
      alignSelf: "start",
      padding: 25,
      paddingTop: 10,
      [theme.breakpoints.down("md")]: {
        display: "flex",
        justifyContent: "space-around",
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        justifyContent: "space-around",
      },
      [theme.breakpoints.down("xs")]: {
        alignItems: "start",
      },
    },
  }));

  const classes = useStyles();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };
  console.log(coin);

  useEffect(() => {
    fetchCoin();
  }, []);

  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography variant="h3" className={classes.header}>
          {coin?.name}
        </Typography>
        <Typography variant="subtitle1" className={classes.description}>
          {ReactHtmlParcer(coin?.description.en.split(". ")[0])}
        </Typography>
        <div className={classes.marketData}>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className={classes.header}>
              Rank:
            </Typography>
            &nbsp;&nbsp;
            <Typography variant="h5" style={{ fontFamily: "Montserrat" }}>
              {coin?.market_cap_rank}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className={classes.header}>
              Current price:
            </Typography>
            &nbsp;&nbsp;
            <Typography variant="h5" style={{ fontFamily: "Montserrat" }}>
              {symbol} {coin?.market_data.current_price[currency.toLowerCase()]}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className={classes.header}>
              Market Cap:
            </Typography>
            &nbsp;&nbsp;
            <Typography variant="h5" style={{ fontFamily: "Montserrat" }}>
              {symbol}{" "}
              {coin?.market_data.market_cap[currency.toLowerCase()]
                .toString()
                .slice(0, -6)}
              M
            </Typography>
          </span>
        </div>
      </div>

      <CoinInfo coin={coin} />
    </div>
  );
};

export default CoinPage;
