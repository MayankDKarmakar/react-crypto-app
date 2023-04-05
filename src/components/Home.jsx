import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import img from "../assets/image.png";

const Home = () => {
  return (
    <Box bgColor={"#130f40"} w={"full"} h={"62vh"}>
      <motion.div
        style={{ height: "67vh" }}
        
        animate={{ transform: 'rotate3d(0,1,0, 360deg)'}}
        transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
      >
        <Image src={img} w={"full"} h={"full"} objectFit={"scale-down"} />
      </motion.div>
    </Box>
  );
};

export default Home;
