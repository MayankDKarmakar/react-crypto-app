import {
  Container,
  HStack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { server } from "../index";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";
import CoinCard from './CoinCard'

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [page, setPage] = useState(1);

  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        setCoins(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, [currency]);

  if (error)
    return <ErrorComponent message={"Error while fetching Exchanges"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup value={currency} p={'8'} onChange={setCurrency} >
          <HStack spacing={'4'} >
          <Radio value={"inr"} >INR</Radio>
          <Radio value={"usd"} >USD</Radio>
          <Radio value={"eur"} >EUR</Radio>
          </HStack>          
          </RadioGroup>
          <HStack wrap={"wrap"} justifyContent={"space-between"}>
            {coins.map((item) => (
              <CoinCard
                key={item.id}
                id={item.id}
                image={item.image}
                symbol={item.symbol}
                name={item.name}
                price={item.current_price}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};


export default Coins;