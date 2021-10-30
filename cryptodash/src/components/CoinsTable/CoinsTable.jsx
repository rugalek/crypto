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
  TableContainer,
  Table,
  LinearProgress,
  TableHead,
  TableCell,
  TableRow,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

export const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  const { currency } = CryptoState();

  const fetchCoins = async () => {
    setIsLoading(true);
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    setIsLoading(false);
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
          {" Cryptocurrency by Market Cap"}
        </Typography>
        <TextField
          label="Search your cryptocoin..."
          variant="outlined"
          style={{ marginBottom: "20px", width: "100%" }}
          onChange={(e) => setSearch(e.target.value)}
        ></TextField>
        <TableContainer>
          {isLoading ? (
            <LinearProgress style={{ backgroundColor: "gold" }} />
          ) : (
            <Table>
              <TableHead style={{ backgroundColor: "#EEBC1D" }}>
                <TableRow>
                  {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                    <TableCell
                      style={{
                        color: "black",
                        fontWeight: "700",
                        fontFamily: "Montserrat",
                      }}
                      key={head}
                      align={head === "Coin" ? "" : "right"}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
            </Table>
          )}
        </TableContainer>
      </Container>
    </ThemeProvider>
  );
};
