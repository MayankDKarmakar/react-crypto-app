import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const CoinCard = ({ id, image, symbol, name, price, currencySymbol }) => {
  return (
    <Link to={`/coin/${id}`}>
      <VStack
        w={"52"}
        p={"8"}
        shadow={"lg"}
        m={"4"}
        borderRadius={"20"}
        transition={"all 0.3s"}
        css={{ "&:hover": { transform: "scale(1.1)" } }}
      >
        <Image
          src={image}
          w={"10"}
          h={"10"}
          objectFit={"contain"}
          alt="Exchange"
        />

        <Heading noOfLines={1} size={"md"}>
          {symbol}
        </Heading>

        <Text noOfLines={1}>{name}</Text>
        <Text noOfLines={1}>{price ? `${currencySymbol}${price}` : "NA"}</Text>
      </VStack>
    </Link>
  );
};

export default CoinCard;
