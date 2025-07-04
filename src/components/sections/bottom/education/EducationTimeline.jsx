import { Avatar, VStack, Stack, Timeline, Heading, Text, Box, HStack } from "@chakra-ui/react"


function EducationTimeline() {
    return (
        <Stack>
            <Timeline.Root>
                <Timeline.Item>
                    <Timeline.Connector>
                        <Timeline.Separator />
                        <Timeline.Indicator>
                            <Avatar.Root>
                                <Avatar.Image src="https://bit.ly/sage-adebayo" />
                                <Avatar.Fallback name="Sage" />
                            </Avatar.Root>
                        </Timeline.Indicator>
                    </Timeline.Connector>
                    <Timeline.Content>
                        <Timeline.Title fontSize="md" fontWeight="medium" pl={1}>
                            <HStack w="full" justifyContent="space-between">
                                <Text>University of St. Thomas</Text>
                                <Text color="gray.400">Grad: May 2026</Text>
                            </HStack>
                        </Timeline.Title>
                        <VStack alignItems="flex-start" gap={0} p={2}>
                            <Text>Bachelor of Science, Computer Science</Text>
                            <Text color="gray.400">GPA: 3.6/4.0</Text>
                        </VStack>
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline.Root>
        </Stack>
    )
}

export default EducationTimeline