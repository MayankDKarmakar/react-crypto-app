import { Box, Button, HStack, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/logo.png";

const Header = () => {
  return (
    <HStack
    
      p={"4"}
      bgColor={"#130f40"}
      justifyContent={"space-between"}
      boxShadow={"base"}
    >
      <Link to={"/"}>
        <Image
          src={img}
          boxSize={"10"}
          css={{ "&:hover": { transform: "scale(1.1)" } }}
        />
      </Link>

      <Box px={"8"}>
        <HStack>
          <Button
            variant={"link"}
            color={"whiteAlpha.900"}
            css={{ "&:hover": { transform: "scale(1.1)" } }}
          >
            <Link to={"/"}>Home</Link>
          </Button>
          <Button
            variant={"link"}
            color={"whiteAlpha.900"}
            css={{ "&:hover": { transform: "scale(1.1)" } }}
          >
            <Link to={"/exchanges"}>Exchanges</Link>
          </Button>
          <Button
            variant={"link"}
            color={"whiteAlpha.900"}
            css={{ "&:hover": { transform: "scale(1.1)" } }}
          >
            <Link to={"/coins"}>Coins</Link>
          </Button>
        </HStack>
      </Box>
    </HStack>
  );
};

export default Header;
