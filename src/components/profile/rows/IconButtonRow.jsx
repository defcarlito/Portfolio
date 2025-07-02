import { Box, Flex, HStack, Button, IconButton } from "@chakra-ui/react"
import { Linkedin, Github, Mail, FileDown } from 'lucide-react'

function IconButtonRow() {
    return (
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
                    <HStack gap={1}>
                        <IconButton color="gray.600" bg="white" _hover={{ bg: "gray.100" }} size="sm">
                            <Linkedin />
                        </IconButton>
                        <IconButton color="gray.600" bg="white" _hover={{ bg: "gray.100" }} size="sm">
                            <Github />
                        </IconButton>
                    </HStack>
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
                    <Button color="gray.600" bg="white" _hover={{ bg: "gray.100" }} size="sm">
                        <FileDown /> Resume
                    </Button>
                </Flex>
            </HStack>
    )
}

export default IconButtonRow