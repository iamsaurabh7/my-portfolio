import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";
import "../App.css";
import Work from "./Work";
import Social from "./Social";

function Content() {
  return (
    <Box w="100%" m={1}>
      <VStack>
        <Navbar />
        <Profile />
        <Social />
        <Projects />
        <Skills />
        <Work />
        <Education />
        <Contact />
      </VStack>
    </Box>
  );
}

export default Content;
