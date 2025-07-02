import { Flex, Heading, Icon, HStack, IconButton } from "@chakra-ui/react"
import { Mail, Copy } from "lucide-react"

function EmailRow(){

    return (
        <HStack>
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
            <IconButton color="gray.600" bg="white" _hover={{ bg: "gray.100" }} size="sm">
                <Mail />
            </IconButton>
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
            p={3}
        >   
            <HStack color="gray.600">
                <Heading size="sm">
                    amor7967 [at] stthomas [dot] edu 
                </Heading>
            </HStack>
        </Flex>

        </HStack>
    )
}

export default EmailRow