import { Box, Heading, Card, Image, Button, IconButton } from "@chakra-ui/react"
import LoremIpsum from "react-lorem-ipsum"
import { Github } from 'lucide-react'

function Project() {
    return (
        <Card.Root 
            bg="white" 
            border="1px solid"
            borderColor="gray.200"
            shadow="0 0 5px rgba(0, 0, 0, 0.1)"
        >
            <Card.Header>
                <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                />
                <Card.Title color="black">Proj title</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Description>
                    <LoremIpsum p={1} avgWordsPerSentence={4} />
                </Card.Description>
            </Card.Body>
            <Card.Footer>
                <Button size="sm" colorPalette="red">Live</Button>
                <IconButton size="sm" colorPalette="red">
                    <Github />
                </IconButton>
            </Card.Footer>
        </Card.Root>
    )
}

export default Project