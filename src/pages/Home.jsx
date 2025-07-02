import { Box, Container, VStack, Icon, Flex } from "@chakra-ui/react"
import { MoveDown } from 'lucide-react'

import Profile from "../components/profile/Profile";
import IconButtonRow from "../components/profile/rows/IconButtonRow";
import EducationExperience from "../components/sections/bottom/EducationExperience";
import EmailRow from "../components/profile/rows/EmailRow";

function Home() {
    return (
        <Box 
            bg="white" 
            color="black"
        >
            <Flex 
                position="relative"
                direction="column"
                minH="100vh" 
                alignContent="center"
                justifyContent="center"
                alignItems="center"
            >
                <Container maxW={650}> 
                    <VStack gap={0}>
                        <Box w="full">
                            <IconButtonRow />
                        </Box>
                        <Container
                            bg="white"  
                            border="1px solid"
                            borderColor="gray.200"
                            shadow="0 0 5px rgba(0, 0, 0, 0.1)"
                            alignContent="center"
                            borderRadius="lg"
                        >
                            <Profile />
                        </Container>

                        <Box w="full">
                            <EmailRow />
                        </Box>
                    </VStack>
                </Container>
                <Box  
                    position="absolute"
                    bottom={28}
                >
                    <Icon color="gray.600" size="md">
                        <MoveDown />
                    </Icon>
                </Box>
            </Flex>
            
            <Container maxW={650}>
                <EducationExperience />
            </Container>
        </Box>
    )
}

export default Home