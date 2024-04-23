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
              src="https://media.licdn.com/dms/image/C510BAQEaBMsGq9iFbA/company-logo_200_200/0/1630596600434/developer_house_logo?e=1721865600&v=beta&t=kYOZuWt7fLt-xMuUpDxwDImmeU_8DjekNVtHaYfhmMY" // Replace with your company logo URL
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
              src="https://media.licdn.com/dms/image/C4D0BAQH2ClGukoTGfw/company-logo_200_200/0/1631353482034?e=1721865600&v=beta&t=tK61R2Hk7i1ZrzimO_fVgvXLgEn74xM2RT_zFOk8OhI" // Replace with your company logo URL
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
