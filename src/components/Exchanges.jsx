import {
  Container,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { server } from "../index";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    const fetchExchanges = async () => {
      const { data } = await axios.get(`${server}/exchanges`);
      setExchanges(data);
      console.log(data);
    };
    fetchExchanges();
  }, []);

  return (
    <Container maxW={"container.xl"}>
      <HStack wrap={"wrap"} justifyContent={"space-between"}>
        {exchanges.map((item) => (
          <ExchangeCard
            key={item.id}
            url={item.url}
            image={item.image}
            rank={item.trust_score_rank}
            name={item.name}
          />
        ))}
      </HStack>
    </Container>
  );
};

const ExchangeCard = ({ url, image, rank, name }) => {
  return (
    <a href={url} target="blank">
      <VStack
        w={"52"}
        p={"8"}
        shadow={"lg"}
        m={"4"}
        borderRadius={"20"}
        transition={"all 0.3s"}
        css={{ "&:hover": { transform: "scale(1.1)" } }}
      >
        <Image src={image} />

        <Heading>{rank}</Heading>

        <Text>{name}</Text>
      </VStack>
    </a>
  );
};

export default Exchanges;
