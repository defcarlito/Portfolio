import { Box, Container, Heading, VStack, Image, Flex, Text, Icon, HStack, Button, Separator, IconButton } from "@chakra-ui/react"
import { MapPin, Linkedin, Github, Mail, FileDown } from 'lucide-react';

function Home() {
    return (
        <Box 
            bg="white" 
            h="100vh" 
            color="black" 
            alignContent="center"
        > 
        <Container w="fit-content">
                <HStack justifyContent="space-between">
                    <Flex 
                        dir="row"
                        bg="white"
                        border="1px solid"
                        borderColor="gray.200" 
                        shadow="0 0 5px rgba(0, 0, 0, 0.1)"
                        borderRadius="lg"
                        w="fit-content"
                        my={2}
                        p={1}
                    >   
                        <Box>
                            <IconButton color="gray.600" _hover={{ bg: "gray.100" }} size="sm">
                                <Linkedin />
                            </IconButton>
                            <IconButton color="gray.600" _hover={{ bg: "gray.100" }} size="sm">
                                <Github />
                            </IconButton>
                            <IconButton color="gray.600" _hover={{ bg: "gray.100" }} size="sm">
                                <Mail />
                            </IconButton>
                        </Box>
                    </Flex>
                    <Flex
                        dir="row"
                        bg="white"
                        border="1px solid"
                        borderColor="gray.200" 
                        shadow="0 0 5px rgba(0, 0, 0, 0.1)"
                        borderRadius="lg"
                        w="fit-content"
                        my={2}
                        p={1}
                    >
                        <Button color="gray.600" _hover={{ bg: "gray.100" }} size="sm">
                            <FileDown /> Resume
                        </Button>
                    </Flex>
                </HStack>
                <Container 
                    bg="white"  
                    maxW={800} 
                    border="1px solid"
                    borderColor="gray.200"
                    shadow="0 0 5px rgba(0, 0, 0, 0.1)"
                    alignContent="center"
                    borderRadius="lg"
                >
                    <VStack>
                        <Flex dir="row" alignItems="center" gap={6} p={6}>
                            <VStack>
                                <Image 
                                    rounded="full" 
                                    boxSize="150px" 
                                    src="https://bit.ly/dan-abramov" 
                                    alt="Dan Abramov" 
                                />
                            </VStack>
                            <VStack align="start" gap={0}>
                                <Heading size="2xl">hey, i'm Harrison</Heading>
                                <Text color="gray.400">studying CS @ University of St. Thomas</Text>
                                <Separator borderColor="transparent" p={1}/>
                                <HStack color="gray.400">
                                    <Icon size="sm">
                                        <MapPin />
                                    </Icon>
                                    <Text fontSize="sm">Saint Paul, MN</Text>
                                </HStack>
                            </VStack>
                        </Flex>
                    </VStack>
                </Container>
            </Container>
        </Box>
    )
}

export default Home