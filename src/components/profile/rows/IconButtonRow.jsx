import { Box, Flex, HStack, Button, IconButton } from "@chakra-ui/react"
import { Linkedin, Github, Mail, FileDown } from 'lucide-react'

function IconButtonRow() {
    return (
            <HStack justifyContent="space-between">
                <Flex 
                    dir="row"
                    bg="card.base"
                    border="1px solid"
                    borderColor="card.border" 
                    shadow="0 0 20px rgba(0, 0, 0, 0.4)"
                    borderRadius="lg"
                    w="fit-content"
                    my={2}
                    p={1}
                >   
                    <HStack gap={1}>
                        <IconButton color="text.base" bg="card.base" _hover={{ bg: "card.border" }} size="sm">
                            <Linkedin />
                        </IconButton>
                        <IconButton color="text.base" bg="card.base" _hover={{ bg: "card.border" }} size="sm">
                            <Github />
                        </IconButton>
                    </HStack>
                </Flex>
                <Flex
                    dir="row"
                    bg="card.base"
                    border="1px solid"
                    borderColor="card.border" 
                    shadow="0 0 20px rgba(0, 0, 0, 0.4)"
                    borderRadius="lg"
                    w="fit-content"
                    my={2}
                    p={1}
                >
                    <Button color="text.base" bg="card.base" _hover={{ bg: "card.border" }} size="sm">
                        <FileDown /> Resume
                    </Button>
                </Flex>
            </HStack>
    )
}

export default IconButtonRow