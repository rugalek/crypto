import { CoinList } from "../../config/api";
import axios from "axios";
import { useState, useEffect } from "react";
import { CryptoState } from "../../CryptoContext";
import {
  Typography,
  Container,
  createTheme,
  TextField,
  TableContainer,
  Table,
  LinearProgress,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
} from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import { useHistory } from "react-router";

export const CoinsTable = () => {
  const [search, setSearch] = useState("");
  const history = useHistory();
  const { currency, symbol, coins, isLoading, fetchCoins } = CryptoState();



  console.log(coins);

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  const useStyles = makeStyles(() => ({
    row: {
      backgroundColor: "#16171a",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#131111",
      },
      fontFamily: "Montserrat",
    },
  }));
  const classes = useStyles();

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
          style={{
            marginBottom: "20px",
            width: "100%",
          }}
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
              <TableBody>
                {handleSearch().map((row) => {
                  const profit = row.price_change_percentage_24h > 0;

                  return (
                    <TableRow
                      onClick={() => history.push(`/coins/${row.id}`)}
                      className={classes.row}
                      key={row.name}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        style={{
                          display: "flex",
                          gap: 15,
                        }}
                      >
                        <img
                          src={row?.image}
                          alt={row.name}
                          height="50"
                          style={{ margin: 10 }}
                        />
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontSize: 22,
                              color: "#FFFFFF",
                            }}
                          >
                            {row.symbol}
                          </span>
                          <span style={{ color: "darkgrey" }}>{row.name}</span>
                        </div>
                      </TableCell>
                      <TableCell align="right" style={{ color: "white" }}>
                        {symbol} {row.current_price.toFixed(2)}
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{
                          color: profit ? "green" : "red",
                          fontWeigth: 500,
                        }}
                      >
                        {profit && "+"}
                        {row.price_change_percentage_24h.toFixed(2)}%
                      </TableCell>
                      <TableCell align="right" style={{ color: "white" }}>
                        {symbol} {row.market_cap.toString().slice(0, -6)}M
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </TableContainer>
      </Container>
    </ThemeProvider>
  );
};
