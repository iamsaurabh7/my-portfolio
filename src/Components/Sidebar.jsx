import { Box, Divider, Flex, Link, Text, VStack } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaHackerrank } from "react-icons/fa";
import React from "react";

function Sidebar() {
  const social = [
    {
      title: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/saurabhvermasv/",
    },
    {
      title: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/iamsaurabh7",
    },
    {
      title: "HackerRank",
      icon: <FaHackerrank />,
      link: "https://www.hackerrank.com/profile/iamsaurabhverma",
    },
  ];

  return (
    <Box bg={"bgSecondary.500"} minH={""} minW={""} m={2}>
      <VStack>
        <Box p={3} bgColor={"bgSecondary.500"} w={"100%"}>
          {" "}
          <Text color={"purpleText.500"} fontSize={"22px"} textAlign={"center"}>
            Socials
          </Text>
        </Box>
        <Divider />
        <Box h={2}></Box>
        <Box>
          {social.map((ele, index) => (
            <Box key={index} p={3} m={2} mx={12}>
              <a href={ele.link} target="_blank" rel="noopener noreferrer">
                <Flex gap={4} color={"white"}>
                  {ele.icon} {ele.title}
                </Flex>
              </a>
            </Box>
          ))}
        </Box>
      </VStack>
    </Box>
  );
}

export default Sidebar;
