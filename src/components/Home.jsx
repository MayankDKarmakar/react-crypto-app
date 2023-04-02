import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import img from "../assets/image.png";

const Home = () => {
  return (
    <Box bgColor={"#130f40"} w={"full"} h={"85vh"}>
      <motion.div style={{ height: "80vh" }} animate={{translateY:"20px"}} transition={{duration:2, repeat:Infinity, repeatType:"reverse"  }} >
        <Image src={img} w={"full"} h={"full"} objectFit={"scale-down"} />
      </motion.div>
    </Box>
  );
};

export default Home;
