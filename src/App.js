import { Box } from "@chakra-ui/react";
import { Flex, useMediaQuery } from "@chakra-ui/react";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";

function App() {
  const [isLargerThanMd] = useMediaQuery("(min-width: 48em)");

  return (
    <Box bgColor="bgPrimary.500" p={0}>
      {isLargerThanMd ? (
        <Flex>
          <Box
            position="sticky"
            left={0}
            top={0}
            width="250px" // Adjust the width as needed
            height="100vh" // Make it as tall as the viewport
            bgColor="bgSecondary.500" // Background color of the sidebar
            zIndex={100} // Set the z-index to control the stacking order
          >
            <Sidebar />
          </Box>
          <Content />
        </Flex>
      ) : (
        <Flex>
          <Content />
        </Flex>
      )}
    </Box>
  );
}

export default App;
