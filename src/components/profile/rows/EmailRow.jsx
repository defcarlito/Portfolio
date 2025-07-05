import { Flex, Heading, Icon, HStack, IconButton } from "@chakra-ui/react"
import { Mail, Copy } from "lucide-react"

function EmailRow(){

    return (
        <HStack>
            <Flex 
                dir="row"
                bg="card.base"
                border="1px solid"
                borderColor="card.border" 
                shadow="0 0 20px rgba(0, 0, 0, 0.4)"
                borderRadius="lg"
                w="fit-content"
                my={2}
                p={3}
            >   
                <HStack>
                    <Icon size="sm">
                        <Mail />
                    </Icon>
                    <Heading size="sm">
                        amor7967 [at] stthomas [dot] edu 
                    </Heading>
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
                <IconButton color="text.base" bg="card.base" _hover={{ bg: "card.border" }} size="sm">
                    <Copy />
                </IconButton>
            </Flex>
        </HStack>
    )
}

export default EmailRow