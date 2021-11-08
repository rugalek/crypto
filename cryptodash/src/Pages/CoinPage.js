import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import { SingleCoin } from "../config/api";
import { CryptoState } from "../CryptoContext";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { CoinInfo } from "../components/CoinInfo";

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
      sidebar: {
        [theme.breakpoints.down("md")]: {
          width: "100%",
        },
      },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 25,
      borderRight: "2px solid grey",
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

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
      </div>
      
      <CoinInfo coin={coin} />
    </div>
  );
};

export default CoinPage;
