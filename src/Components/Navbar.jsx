import { HamburgerIcon } from "@chakra-ui/icons";

import {
  Box,
  Button,
  Flex,
  IconButton,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

function Navbar() {
  const [isLargerThanMd] = useMediaQuery("(min-width: 48em)");
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Initialize sidebar state

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <Flex
      bgColor={"bgPrimary.500"}
      w="100%"
      justifyContent={"space-between"}
      p={1}
      position="sticky"
      top={0}
      zIndex={100}
    >
      <Box>{/* <Text color={"white"}>Saurabh Verma</Text> */}</Box>
      {isLargerThanMd ? (
        <Box>
          <Button bgColor={"rgba(178,121,216,.959)"}>Contact me</Button>
        </Box>
      ) : (
        <Box>
          <Button bgColor={"rgba(178,121,216,.959)"} mx={2}>
            Contact me
          </Button>
          <IconButton
            aria-label="Open Sidebar"
            icon={<HamburgerIcon />}
            size="md"
            onClick={toggleSidebar} // Toggle the sidebar when the button is clicked
          />
          {isSidebarOpen && <Sidebar />} {/* Show the sidebar if it's open */}
        </Box>
      )}
    </Flex>
  );
}

export default Navbar;
