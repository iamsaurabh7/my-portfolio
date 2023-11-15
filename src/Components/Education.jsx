import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function Education() {
  return (
    <Box w={"100%"}>
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
              boxSize={["30px", "40px", "60px", "90px"]}
              src="https://media.licdn.com/dms/image/C560BAQHtLyOBOSte_Q/company-logo_200_200/0/1631336349482?e=1707350400&v=beta&t=ptrUgOTXXZL2vHjyh5Khh5EtdujfzTlYFH7XouJGuaM"
              alt="St. Xavier's College, Ranchi"
              borderRadius={"10px"}
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
              boxSize={["30px", "40px", "60px", "90px"]}
              src="https://media.licdn.com/dms/image/C4D0BAQH-vND3Qt9h9g/company-logo_200_200/0/1663332671412/guru_ghasidas_university_logo?e=1707350400&v=beta&t=gCxgJhp2dMgYmxiW-C-QZDZzBj31OeC08HKj7Y9bnlU"
              alt="Guru Ghasidas University"
              borderRadius={"10px"}
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
