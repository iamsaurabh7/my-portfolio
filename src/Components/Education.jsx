import {
  Box,
  Card,
  CardBody,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import logoXavier from "../images/xavier.jpeg";
import logoGGU from "../images/guru_ghasidas_university_logo.jpeg";

function Education() {
  return (
    <Box w={"100%"} my={3}>
      <VStack>
        <Text color="white" m={2} p={2} as="b" fontSize="20px">
          Education
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
        >
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            bgColor={"bgSecondary.500"}
            m={2}
            p={2}
            borderWidth={1.7}
            borderColor="purpleText.500"
            borderRadius="10px"
          >
            <Image
              objectFit="cover"
              boxSize={["0px", "0px", "60px", "90px"]}
              src={logoXavier}
              alt="St. Xavier's College, Ranchi"
              borderRadius={"7px"}
            />

            <Stack>
              <CardBody>
                <Heading color={"white"} size="md">
                  St. Xavier's College
                </Heading>

                <Text py="2" color={"white"}>
                  Master of Computer Applications - MCA
                </Text>
              </CardBody>
            </Stack>
          </Card>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            bgColor={"bgSecondary.500"}
            m={2}
            p={2}
            borderWidth={1.7}
            borderColor="purpleText.500"
            borderRadius="10px"
          >
            <Image
              objectFit="cover"
              boxSize={["0px", "0px", "60px", "90px"]}
              src={logoGGU}
              alt="Guru Ghasidas University"
              borderRadius={"7px"}
            />{" "}
            <Stack>
              <CardBody>
                <Heading color={"white"} size="md">
                  Guru Ghasidas University
                </Heading>

                <Text py="2" color={"white"}>
                  Bachelor of Applied Science , Electronics
                </Text>
              </CardBody>
            </Stack>
          </Card>
        </Grid>
      </VStack>
    </Box>
  );
}

export default Education;
