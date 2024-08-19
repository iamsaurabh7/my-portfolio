import { Box, Flex, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import React from "react";
import "./common.css";
// import {
//   AiFillHtml5,
//   BiLogoCss3,
//   BiLogoJavascript,
//   GrReactjs,
//   SiChakraui,
//   SiPostman,
//   BsBootstrapFill,
//   AiFillGithub,
//   BiLogoNetlify,
//   IoLogoVercel,
// } from "react-icons/all";

const skillsArr = [
  {
    title: "JavaScript",
    icon: "",
  },
  {
    title: "TypeScript",
    icon: "",
  },
  {
    title: "ReactJS",
    icon: "",
  },
  {
    title: "NextJS",
    icon: "",
  },
  {
    title: "NodeJS",
    icon: "",
  },

  {
    title: "ExpressJS",
    icon: "",
  },

  {
    title: "MongoDB",
    icon: "",
  },
  {
    title: "Redux",
    icon: "",
  },
  {
    title: "Postman",
    icon: "",
  },
  {
    title: "Rest-API",
    icon: "",
  },
  {
    title: "HTML/CSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png",
  },
  {
    title: "Bootstrap",
    icon: "",
  },
  {
    title: "Chakra-UI",
    icon: "",
  },
  {
    title: "GitHub",
    icon: "",
  },
  {
    title: "AWS",
    icon: "",
  },
];

function Skills() {
  return (
    <Box>
      <VStack>
        <Text color="white" m={2} p={2} as="b" fontSize="20px">
          Skills
        </Text>
        <Flex>
          {/* <Text color={"white"}>Frontend</Text> <br /> */}
          <Grid
            templateColumns={{
              base: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(5, 1fr)",
            }}
            gap={4}
          >
            {skillsArr.map((skill, index) => (
              <GridItem key={index}>
                <Box
                  m={2}
                  p={2}
                  borderWidth={1.7}
                  borderColor="purpleText.500"
                  borderRadius="10px"
                  className="skill-box"
                  _hover={{
                    bgGradient: "linear(to-l, #7928CA, #FF0080)",
                  }}
                >
                  <Text textAlign={"center"} color="white">
                    {skill.title}
                  </Text>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Flex>
      </VStack>
    </Box>
  );
}

export default Skills;
