import { VStack, HStack, Flex, Image, Icon, Heading, Text, Separator } from "@chakra-ui/react"
import { MapPin } from 'lucide-react'

function Profile() {
    return (
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
                        <Text fontSize="sm">Saint Paul, Minnesota</Text>
                    </HStack>
                </VStack>
            </Flex>
        </VStack>
    )
}

export default Profile