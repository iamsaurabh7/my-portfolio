import {
  Box,
  VStack,
  HStack,
  Icon,
  Text,
  useMediaQuery,
  Divider,
} from "@chakra-ui/react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  const [isLargerThanMd] = useMediaQuery("(min-width: 48em)");

  return (
    <VStack w="100%">
      <Text color="white" m={2} p={2} as="b" fontSize="20px">
        Contact me
      </Text>
      {isLargerThanMd ? (
        <HStack
          w="60%"
          justifyContent="space-between"
          align="center"
          spacing={10}
        >
          <Box display="flex" alignItems="center" gap={7}>
            <Icon as={FaEnvelope} boxSize={8} color="white" />
            <Text color="white">iamsaurabhverma7@gmail.com</Text>
          </Box>
          <Box display="flex" alignItems="center" gap={7}>
            <Icon as={FaPhone} boxSize={8} color="white" />
            <Text color="white">+91 95048 44889</Text>
          </Box>
        </HStack>
      ) : (
        <VStack w="60%" spacing={5}>
          <Box display="flex" alignItems="center" gap={7}>
            <Icon as={FaEnvelope} boxSize={8} color="white" />
            <Text color="white">iamsaurabhverma7@gmail.com</Text>
          </Box>
          <Box display="flex" alignItems="center" gap={7}>
            <Icon as={FaPhone} boxSize={8} color="white" />
            <Text color="white">+91 95048 44889</Text>
          </Box>
        </VStack>
      )}
      <Divider m={4} />
    </VStack>
  );
}

export default Contact;
