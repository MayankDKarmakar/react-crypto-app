import { Box, Button, HStack, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/logo.png";

const Header = () => {
  return (
    <HStack p={"4"} bgColor={"#130f40"} justifyContent={"space-between"} boxShadow={'base'} >
      <Image src={img} boxSize={"10"} />

      <Box px={"8"}>
        <HStack>
          <Button variant={"link"} color={"white"}>
            <Link to={"/"}>Home</Link>
          </Button>
          <Button variant={"link"} color={"whiteAlpha.900"}>
            <Link to={"/exchanges"}>Exchanges</Link>
          </Button>
          <Button variant={"link"} color={"whiteAlpha.900"}>
            <Link to={"/coins"}>Coins</Link>
          </Button>
        </HStack>
      </Box>
    </HStack>
  );
};

export default Header;
