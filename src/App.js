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
            width="250px"
            height="100vh"
            bgColor="bgSecondary.500"
            zIndex={100}
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
