import { Flex, Tabs } from "@chakra-ui/react"
import { Briefcase, GraduationCap, Icon } from 'lucide-react'

function EducationExperience(){
    return (
        <Flex 
            dir="row"
            bg="white"
            border="1px solid"
            borderColor="gray.200" 
            shadow="0 0 5px rgba(0, 0, 0, 0.1)"
            borderRadius="lg"
            w="full"
            my={2}
            p={2}
        >
            <Tabs.Root defaultValue="education" variant="plain" fitted w="full">
                <Tabs.List bg="bg.muted" rounded="l3" p="1">
                    <Tabs.Trigger value="education">
                        <GraduationCap size={16} />
                        Education
                    </Tabs.Trigger>
                    <Tabs.Trigger value="experience">
                        <Briefcase size={16} />
                        Experience
                    </Tabs.Trigger>
                    <Tabs.Indicator rounded="l2" />
                </Tabs.List>
                <Tabs.Content value="education">
                    this is education
                </Tabs.Content>
                <Tabs.Content value="experience">
                    this is my work
                </Tabs.Content>
            </Tabs.Root>
        </Flex>
    )
}

export default EducationExperience