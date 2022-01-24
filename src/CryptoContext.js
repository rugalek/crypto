import React, { createContext, useContext, useState, useEffect } from "react";
import { CoinList } from "./config/api";
import axios from "axios";
const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("$");
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  const fetchCoins = async () => {
    setIsLoading(true);
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (currency === "USD") setSymbol("$");
    else if (currency === "EUR") setSymbol("€");
    else if (currency === "RUB") setSymbol("₽");
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, symbol, setCurrency, isLoading, coins, fetchCoins}}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
