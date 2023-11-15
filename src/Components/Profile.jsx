import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function Profile() {
  return (
    <Box
      bgImage="url('https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      bgSize="cover"
      w="100%"
      h={{ base: "120px", md: "180px" }}
      
    >
      <Flex justifyContent="space-evenly" align="center" h="100%" gap={10}>
        <Box
          boxSize={["100px", "110px", "160px"]}
          borderRadius="full"
          overflow="hidden"
        >
          <Image
            src="https://avatars.githubusercontent.com/u/91486795?s=400&u=7814a7eae314d57cb5b73bc4778d409c1d960ea5&v=4"
            alt="Profile Image"
          />
        </Box>
        <Text
          bg="gradientPrimary"
          fontSize={["16px", "26px", "36px"]}
          fontWeight="bold"
          bgClip="text"
          color="transparent"
        >
          Saurabh Verma
        </Text>
      </Flex>
    </Box>
  );
}

export default Profile;
