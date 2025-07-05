import { Flex, Box, Grid } from "@chakra-ui/react"
import Project from "./projects/Project"

function ProjectShowcase() {

    return (
        <Grid 
            templateColumns="repeat(2, 1fr)"
            borderRadius="lg"
            w="full"
            my={4}
            gap={4}
        >
            <Project />
            <Project />
        </Grid>
    )
}

export default ProjectShowcase