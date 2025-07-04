import { Avatar, VStack, Stack, Timeline, Heading, Text, Box, HStack } from "@chakra-ui/react"
import LoremIpsum from "react-lorem-ipsum"

function ExperienceTimeline(){
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
                                <Text>IT Support Technician Intern</Text>
                                <Text color="gray.400" fontSize="sm">June 2025 - Present</Text>
                            </HStack>
                            <HStack fontSize="sm" w="full" justifyContent="space-between" fontWeight="normal">
                                <Text>Mayo Clinic</Text>
                                <Text color="gray.400">Rochester, Minnesota</Text>
                            </HStack>
                        </Timeline.Title>
                        <VStack alignItems="flex-start" gap={0} p={2}>
                            <Text fontSize="sm">
                                <LoremIpsum p={1} avgWordsPerSentence={4} />
                            </Text>
                        </VStack>
                    </Timeline.Content>
                </Timeline.Item>
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
                                <Text>Data Scientist Intern</Text>
                                <Text color="gray.400" fontSize="sm">June 2024 - Aug. 2024</Text>
                            </HStack>
                            <HStack fontSize="sm" w="full" justifyContent="space-between" fontWeight="normal">
                                <Text>Mayo Clinic</Text>
                                <Text color="gray.400">Rochester, Minnesota</Text>
                            </HStack>
                        </Timeline.Title>
                        <VStack alignItems="flex-start" gap={0} p={2}>
                            <Text fontSize="sm">
                                <LoremIpsum p={1} avgWordsPerSentence={4} />
                            </Text>
                        </VStack>
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline.Root>
        </Stack>
    )
}

export default ExperienceTimeline