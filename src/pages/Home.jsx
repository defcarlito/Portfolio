import { Box, Container, Flex, HStack, Button, IconButton } from "@chakra-ui/react"
import Profile from "../components/profile/Profile";
import IconButtonRow from "../components/sections/top/IconButtonRow";

function Home() {
    return (
        <Box 
            bg="white" 
            h="100vh" 
            color="black" 
            alignContent="center"
        > 
            <Container w="fit-content">
                <Box>
                    <IconButtonRow />
                </Box>
                <Container 
                    bg="white"  
                    maxW={800} 
                    border="1px solid"
                    borderColor="gray.200"
                    shadow="0 0 5px rgba(0, 0, 0, 0.1)"
                    alignContent="center"
                    borderRadius="lg"
                >
                    <Profile />
                </Container>
            </Container>
        </Box>
    )
}

export default Home