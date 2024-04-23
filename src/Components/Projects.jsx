import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Image,
  Text,
  VStack,
  Heading,
  HStack,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";
import {
  SiNetlify,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiJsonwebtokens,
  SiPostman,
} from "react-icons/si";
import { TbApi, TbJson } from "react-icons/tb";
import stroveHiveBackendIMG from "./storehiveBackendImg.png";

const projectsArr = [
  {
    name: "StoreHive-API 🛍️",
    url: "https://github.com/iamsaurabh7/StoreHive-Backend",
    gitHub: "https://github.com/iamsaurabh7/StoreHive-Backend",
    img: stroveHiveBackendIMG,
    info: `Welcome to the StoreHive Backend API documentation`,
    techStach: [
      <FaNodeJs />,
      <SiExpress />,
      <SiMongodb />,
      <SiMongoose />,
      <SiJsonwebtokens />,
      <SiPostman />,
    ],
    moreInfo: `🌟 RESTful API Design: Implemented a RESTful API architecture for the StoreHive backend, providing standardized endpoints for interacting with the application's data.
   
    🌟 MongoDB Integration: Leveraged MongoDB, a NoSQL database, to store and manage product data efficiently. Utilized Mongoose, a MongoDB object modeling tool, to create schemas and interact with the database.
  
    🌟 Express.js Framework: Developed the backend server using Express.js, a minimalist web application framework for Node.js. Utilized Express to define routes, handle HTTP requests, and implement middleware for authentication and error handling.
  
    🌟 User Authentication with JWT: Implemented user authentication using JSON Web Tokens (JWT) to securely authenticate and authorize users. Generated JWT tokens upon successful authentication, which were then used to authenticate subsequent API requests.
  
    🌟 API Documentation: Documented the API endpoints, request methods, request parameters, and response formats using tools like Swagger or Postman. This documentation provided developers with clear guidelines on how to interact with the API, promoting ease of integration and development of client applications.`,
    tech: ["React.js", "Styled Components", "React Slick", "Netlify Hosting"],
  },
  {
    name: "Zomato Clone 🍔",
    url: "https://zomato-clone-sv.netlify.app/",
    gitHub: "https://github.com/iamsaurabh7/zomato_clone",
    img: "https://user-images.githubusercontent.com/91486795/283275014-bd598267-c401-4b74-829b-67a5667fcc50.png",
    info: `Experience the delight of food exploration with Zomato Clone`,
    techStach: [
      <FaHtml5 />,
      <FaCss3Alt />,
      <IoLogoJavascript />,
      <RiReactjsFill />,
      <SiNetlify />,
    ],
    moreInfo: `🌟 Homepage: Discover a world of culinary delights, explore restaurants, and find your favorite cuisines.
    
   
    🌟 Search Bar: Effortlessly search for restaurants, cuisines, or specific dishes with a user-friendly search bar.
  
    🌟 Filters: Refine your search with interactive filters, making it easy to find the perfect dining experience.
  
    🌟 Explore Sections: Dive into curated lists and collections to discover trending restaurants and cuisines.
  
    🌟 Responsive Design: Enjoy a seamless experience on both desktop and tablet devices.`,
    tech: ["React.js", "Styled Components", "React Slick", "Netlify Hosting"],
  },
  {
    name: "JioMart Clone 🛒",
    url: "https://tiny-marigold-47f428.netlify.app/",
    gitHub: "https://github.com/iamsaurabh7/jiomart-clone",
    img: "https://user-images.githubusercontent.com/91486795/266869840-e925ba2a-7e18-43fb-b50b-b0b3767765d8.png",
    techStach: [
      <FaHtml5 />,
      <FaCss3Alt />,
      <IoLogoJavascript />,
      <FaBootstrap />,
      <TbApi />,
      <SiNetlify />,
    ],
    info: `Explore the world of online shopping with my JioMart Clone`,
    moreInfo: `✨ Homepage : Discover featured products, irresistible deals, and seamless navigation to your favorite categories.
 
        ✨ Sign-In Page : Enjoy a secure and user-friendly sign-in experience to access personalized features.
        
        ✨ Cart Page : Keep track of your shopping cart, and proceed to checkout with ease.
        
        ✨ Add Address Page : Conveniently add your delivery address for a smooth shopping process.
        
        ✨ Payment Page : Experience hassle-free payment processing for placing your orders.`,
    teck: ["html", "css", "javaScript", "Bootstrap", "API"],
  },
  {
    name: "Todo-App ✅",
    url: "https://64ec881970ea1b02a7426156--stellar-mooncake-6f6278.netlify.app/",
    gitHub: "https://github.com/iamsaurabh7/todo",
    img: "https://user-images.githubusercontent.com/91486795/263752745-212bdac1-f081-432e-9597-05976900d2ad.png",
    info: `Manage your tasks effortlessly with the Todo-App!`,
    techStach: [
      <FaHtml5 />,
      <FaCss3Alt />,
      <IoLogoJavascript />,
      <FaBootstrap />,
      <TbJson />,
      <SiNetlify />,
    ],
    moreInfo: `It offers these powerful features:

    📥 Add new tasks to the database 

    ⚡ Toggle tasks as Active / Inactive 

    🖊️ Edit task titles on the go 
    
    ✖️ Remove tasks from the list `,
    teck: ["html", "css", "javaScript", "Bootstrap"],
  },
];

function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === projectsArr.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? projectsArr.length - 1 : prevSlide - 1
    );
  };

  const projectsToShow = isMobile ? 1 : 3;

  return (
    <Box>
      <VStack>
        <Text color={"white"} m={2} p={2} as="b" fontSize={"20px"}>
          Projects
        </Text>

        <Flex
          align="center"
          justify="space-between"
          w="100%"
          overflowX="auto"
          sx={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <Button
            onClick={handlePrevSlide}
            p={2}
            isDisabled={currentSlide === 0}
            bgColor={"rgba(178,141,216,.959)"}
            fontSize={"xl"}
          >
            {"<"}
          </Button>
          {projectsArr.map((project, index) => (
            <Box
              key={index}
              // display={isMobile ? "block" : "flex"}
              bgColor={"bgSecondary.500"}
              m={7}
              p={4}
              borderRadius={"10px"}
              w={isMobile ? "100%" : `100%`}
              // ${100 / projectsToShow}%
              // mr={!isMobile && index === projectsArr.length - 1 ? 0 : 4}
              display={
                index >= currentSlide && index < currentSlide + projectsToShow
                  ? "block"
                  : "none"
              }
            >
              <VStack>
                <Heading as="h4" size="md" color={"white"}>
                  {project.name}
                </Heading>
                <Image
                  src={project.img}
                  // boxSize={["180px", "180px", "unset"]}
                  maxW={{ base: "240px", md: "200px" }}
                  minW={{ base: "200px" }}
                  alt={project.name}
                  maxH={{ base: "100px" }}
                />
                <Box mt={2}>
                  <HStack>
                    {project.techStach &&
                      project.techStach.map((tech, index) => (
                        <Box
                          key={index}
                          fontSize="2xl"
                          color="white"
                          _hover={{ color: "gray.300" }}
                        >
                          {tech}
                        </Box>
                      ))}
                  </HStack>
                </Box>
                <Flex gap={4} p={3}>
                  <ButtonGroup spacing="4">
                    <a href={project.url}>
                      <Button
                        size="sm"
                        variant="solid"
                        color="black"
                        bg="rgba(178,121,216,.959)"
                      >
                        Checkout
                      </Button>
                    </a>
                    <a href={project.gitHub}>
                      <Button
                        size="sm"
                        variant="solid"
                        color="black"
                        bg="rgba(178,121,216,.959)"
                      >
                        GitHub
                      </Button>
                    </a>
                  </ButtonGroup>
                  {/* <Text color="white" textAlign="center" fontSize="sm">
                    {project.info}
                  </Text> */}
                </Flex>
              </VStack>
            </Box>
          ))}
          <Button
            onClick={handleNextSlide}
            p={2}
            bgColor={"rgba(178,141,216,.959)"}
            fontSize={"xl"}
            isDisabled={
              currentSlide ===
              (isMobile ? projectsArr.length - 1 : projectsArr.length - 3)
            }
          >
            {">"}
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
}

export default Projects;
