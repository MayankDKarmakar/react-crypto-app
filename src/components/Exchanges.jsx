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
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);

  if (error)
    return <ErrorComponent message={"Error while fetching Exchanges"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
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
        </>
      )}
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
        <Image src={image} w={'10'} h={'10'} objectFit={'contain'} alt="Exchange" />

        <Heading noOfLines={1} size={'md'} >{rank}</Heading>

        <Text noOfLines={1} >{name}</Text>
      </VStack>
    </a>
  );
};

export default Exchanges;
