import { Box, HStack, Link } from "@chakra-ui/react";
import React from "react";
import { FaLinkedin, FaGithub, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socialArr = [
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
    title: "LeetCode",
    icon: <SiLeetcode />,
    link: "https://leetcode.com/iamsaurabhverma/",
  },
  {
    title: "HackerRank",
    icon: <FaHackerrank />,
    link: "https://www.hackerrank.com/profile/iamsaurabhverma",
  },
];

function Social() {
  return (
    <Box display={["flex", "flex", "none"]} justifyContent="center">
      {/* Content for base and small screens */}
      <HStack spacing={4} color="white" mt={1.5}>
        {socialArr.map((ele, index) => (
          <Box mx={5} as="span" key={index} fontWeight="bold" fontSize={25}>
            <Link href={ele.link}>{ele.icon}</Link>
          </Box>
        ))}
      </HStack>
    </Box>
  );
}

export default Social;
