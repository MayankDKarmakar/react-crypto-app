import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import founderimg from '../assets/founder.jpg'

const Footer = () => {
  return (
    <Box
      bgColor={"#130f40"}
      color={"whiteAlpha.700"}
      minH={"20vh"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            BetaCrypt is the best crypto trading app worldwide. It is enhanced with realtime data and charts. Join to bull.
          </Text>
        </VStack>

        <VStack>
          <Avatar src={founderimg} boxSize={"28"} mt={["4", "0"]} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
