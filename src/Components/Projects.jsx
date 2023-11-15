import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const projectsArr = [
  {
    name: "Zomato Clone 🍔",
    url: "https://zomato-clone-sv.netlify.app/",
    gitHub: "https://github.com/iamsaurabh7/zomato-clone",
    img: "https://user-images.githubusercontent.com/91486795/283275014-bd598267-c401-4b74-829b-67a5667fcc50.png",
    info: `Experience the delight of food exploration with Zomato Clone`,
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
    img: "https://media.licdn.com/dms/image/D4D22AQFw-wRBiK6Sog/feedshare-shrink_800/0/1694548378418?e=1700092800&v=beta&t=fg_Z5VwGy6VyLnVr9wHorR5OGMOY2AA_lBjEAvpDV-M",
    info: `Explore the world of online shopping with my JioMart Clone`,
    moreInfo: `✨ Homepage : Discover featured products, irresistible deals, and seamless navigation to your favorite categories.
 
        ✨ Sign-In Page : Enjoy a secure and user-friendly sign-in experience to access personalized features.
        
        ✨ Cart Page : Keep track of your shopping cart, and proceed to checkout with ease.
        
        ✨ Add Address Page : Conveniently add your delivery address for a smooth shopping process.
        
        ✨ Payment Page : Experience hassle-free payment processing for placing your orders.`,
    teck: ["html", "css", "javaScript", "Bootstrap", "API"],
  },
  {
    name: "Todo-App",
    url: "https://64ec881970ea1b02a7426156--stellar-mooncake-6f6278.netlify.app/",
    gitHub: "https://github.com/iamsaurabh7/todo",
    img: "https://media.licdn.com/dms/image/D5622AQFlAQqj9-SnsA/feedshare-shrink_800/0/1693240391483?e=1700092800&v=beta&t=OooI2tkgqOZZlfLw9PzHHTKsAc3k5hv968zOu0CpMrg",
    info: `Manage your tasks effortlessly with the Todo-App!`,
    moreInfo: `It offers these powerful features:
      - Add new tasks to the database 📥
      - Toggle tasks as Active / Inactive ⚡
      - Edit task titles on the go 🖊️
      - Remove tasks from the list ✖️`,
    teck: ["html", "css", "javaScript", "Bootstrap"],
  },
];

function Projects() {
  return (
    <Box>
      <VStack>
        <Text
          color={"white"}
          //
          m={2}
          p={2}
          as="b"
          fontSize={"20px"}
        >
          Projects
        </Text>

        <Flex>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(3, 1fr)",
              //   lg: "repeat(3, 1fr)",
            }}
            gap={{ base: "0", md: "10" }}
          >
            {projectsArr.map((project) => (
              <GridItem
                w={"270px"}
                bgColor={"bgSecondary.500"}
                m={2}
                p={4}
                borderRadius={"10px"}
              >
                <VStack>
                  <Image src={project.img} />
                  <Text p={1} color={"white"}>
                    {project.info}
                  </Text>
                  <Flex gap={4} p={3}>
                    {/* <Button>Visit</Button>
                    <Button>Code</Button>
                    <Button>More info</Button> */}

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
                    <Popover>
                      <PopoverTrigger>
                        <Button
                          size="sm"
                          color="(178,121,216,.959)"
                          bg="white"
                          _hover={{
                            background: "black",
                            color: "white",
                          }}
                        >
                          Info
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton color="black" />
                        <PopoverBody color="black">
                          {project.moreInfo}
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                  {/* <Flex>
                    {project.teck.map((ele) => (
                      <Text key={ele} gap={1} color="white" p={1} m={1}>
                        {ele}
                      </Text>
                    ))}
                  </Flex> */}
                </VStack>
              </GridItem>
            ))}
          </Grid>
        </Flex>
      </VStack>
    </Box>
  );
}

export default Projects;
