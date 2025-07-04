import { Box, Container, VStack, Icon, Flex, Heading, HStack, Button } from "@chakra-ui/react"
import { MoveDown, ArrowRight } from 'lucide-react'

import Profile from "../components/profile/Profile";
import IconButtonRow from "../components/profile/rows/IconButtonRow";
import EducationExperience from "../components/sections/bottom/EducationExperience";
import EmailRow from "../components/profile/rows/EmailRow";
import ProjectShowcase from "../components/sections/bottom/ProjectShowcase";

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
            <VStack gap={40}>
                <Container maxW={650}>
                    <EducationExperience />
                </Container>

                <Container maxW={650}>
                    <HStack position="relative" justifyContent="center">
                        <Heading 
                            justifySelf="center" 
                            size="3xl"
                        >
                        Recent Projects
                        </Heading>

                        <Button 
                            color="gray.400" 
                            variant="plain"
                            position="absolute"
                            right={0}
                        >
                            View more
                            <ArrowRight />
                        </Button>
                    </HStack>
                    <ProjectShowcase />
                </Container>
            </VStack>

        </Box>
    )
}

export default Home