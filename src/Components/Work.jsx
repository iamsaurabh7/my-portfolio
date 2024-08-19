import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import logoDeveloperHouse from "../images/developer_house_logo.jpeg";
import logoAvaali from "../images/avaali.jpeg";

function Work() {
  return (
    <Box w="100%" my={3}>
      <VStack>
        <Text color="white" m={2} p={2} as="b" fontSize="20px">
          Work Experience
        </Text>
        <HStack>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            bgColor="bgSecondary.500"
            m={2}
            p={2}
            borderWidth={1.7}
            borderColor="purpleText.500"
            borderRadius="10px"
          >
            <Image
              objectFit="cover"
              boxSize={["0px", "0px", "60px", "90px"]}
              src={logoDeveloperHouse} // Replace with your company logo URL
              alt="Developer House Technology"
              borderRadius="7px"
              margin={"auto"}
            />
            <Stack>
              <CardBody>
                <Heading color="white" size="md">
                  Developer House Technology
                </Heading>
                <Text py="2" color="white">
                  Full Stack Developer
                </Text>
                <Text py="2" color="white">
                  Jul'23 - Present
                </Text>
                {/* <Text py="2" color="white">
                FrontEnd Developer
              </Text> */}
              </CardBody>
            </Stack>
          </Card>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            bgColor="bgSecondary.500"
            m={2}
            p={2}
            borderWidth={1.7}
            borderColor="purpleText.500"
            borderRadius="10px"
          >
            <Image
              objectFit="cover"
              boxSize={["0px", "0px", "60px", "90px"]}
              src={logoAvaali}
              alt="Avaali Solutions Pvt. Ltd"
              borderRadius="7px"
              margin={"auto"}
            />
            <Stack>
              <CardBody>
                <Heading color="white" size="md">
                  Avaali Solutions Pvt. Ltd
                </Heading>
                <Text py="2" color="white">
                  Associate Consultant
                </Text>
                <Text py="2" color="white">
                  Feb'23 - Jun'23
                </Text>
                {/* <Text py="2" color="white">
                FrontEnd Developer
              </Text> */}
              </CardBody>
            </Stack>
          </Card>
        </HStack>
      </VStack>
    </Box>
  );
}

export default Work;
