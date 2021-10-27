import { CoinList } from "../../config/api";
import axios from "axios";
import { useState, useEffect } from "react";
import { CryptoState } from "../../CryptoContext";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Select,
  MenuItem,
  createTheme,
  TextField,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

export const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const { currency } = CryptoState();

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    setLoading(false);
  };

  console.log(coins);

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  const darkTheme = createTheme({
    pallete: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          style={{ margin: "18px", fontfamily: "Montserrat" }}
        >
          <TextField
            label="Search your cryptocoin..."
            variant="outlined"
            style={{ marginBottom: "20px", width: "100%" }}
            onChange={(e) => setSearch(e.target.value)}
          ></TextField>
        </Typography>
      </Container>
    </ThemeProvider>
  );
};
