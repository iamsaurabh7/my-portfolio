// import { HamburgerIcon } from "@chakra-ui/icons";

import {
  Box,
  Button,
  Flex,
  // IconButton,
  Spacer,
  // useMediaQuery,
} from "@chakra-ui/react";
// import React, { useState } from "react";
// import Sidebar from "./Sidebar";
import { animateScroll as scroll } from "react-scroll";

function Navbar() {
  // const [isLargerThanMd] = useMediaQuery("(min-width: 48em)");
  // const [isSidebarOpen, setSidebarOpen] = useState(false); // Initialize sidebar state

  // // Function to toggle the sidebar
  // const toggleSidebar = () => {
  //   setSidebarOpen(!isSidebarOpen);
  // };

  const scrollToContact = () => {
    scroll.scrollToBottom({ duration: 500 });
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
      marginLeft="auto" // Aligns button to the right side
    >
      <Spacer />
      <Button
        bgColor={"rgba(178,121,216,.959)"}
        mr={2}
        onClick={scrollToContact}
      >
        Contact me
      </Button>
      <Box>{/* <Text color={"white"}>Saurabh Verma</Text> */}</Box>
    </Flex>
  );
}

export default Navbar;

// {isLargerThanMd ? (
//   <Button
//     bgColor={"rgba(178,121,216,.959)"}
//     mr={2}
//     onClick={scrollToContact}
//   >
//     Contact me
//   </Button>
// ) : (
//   <Box>
//     <Button bgColor={"rgba(178,121,216,.959)"} onClick={scrollToContact}>
//       Contact me
//     </Button>
//     <IconButton
//       aria-label="Open Sidebar"
//       icon={<HamburgerIcon />}
//       bgColor={"rgba(178,121,216,.959)"}
//       size="md"
//       ml={1}
//       onClick={toggleSidebar} // Toggle the sidebar when the button is clicked
//     />
//     {isSidebarOpen && <Sidebar />} {/* Show the sidebar if it's open */}
//   </Box>
// )}
