import React from "react";
import { Box, Heading, Text, Button, Container, Stack, Avatar, HStack, VStack, Wrap, WrapItem, Tag } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const developers = [
  {
    name: "John Doe",
    location: "San Francisco, CA",
    technologies: ["React", "Node.js", "JavaScript"],
    avatar: "https://images.unsplash.com/photo-1469833120660-1a218b53d28a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZGV2ZWxvcGVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEzMDI2NDc1fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Jane Smith",
    location: "New York, NY",
    technologies: ["Go", "JavaScript", "Node.js"],
    avatar: "https://images.unsplash.com/photo-1485217988980-11786ced9454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTMwMjY0NzV8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Mike Johnson",
    location: "Chicago, IL",
    technologies: [".NET", "C#", "Azure"],
    avatar: "https://images.unsplash.com/photo-1514543250559-83867827ecce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxtYWxlJTIwZGV2ZWxvcGVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEzMDI2NDc1fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Box>
      {/* Hero */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" mb={4}>
            Connect with Top Software Talent
          </Heading>
          <Text fontSize="xl" mb={8}>
            Particles is the premier marketplace for finding exceptional developers specializing in the latest web technologies. Hire with confidence.
          </Text>
          <Button colorScheme="blue" size="lg" rightIcon={<FaArrowRight />}>
            View Developers
          </Button>
        </Container>
      </Box>

      {/* Featured Developers */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10}>
            Featured Developers
          </Heading>
          <Wrap spacing={8}>
            {developers.map((dev) => (
              <WrapItem key={dev.name} flexBasis={["100%", "50%", "33.33%"]}>
                <Box bg="white" p={6} rounded="md" shadow="md">
                  <VStack spacing={4} align="stretch">
                    <HStack>
                      <Avatar size="xl" src={dev.avatar} />
                      <Box>
                        <Heading as="h3" size="md">
                          {dev.name}
                        </Heading>
                        <Text>{dev.location}</Text>
                      </Box>
                    </HStack>
                    <Stack direction="row">
                      {dev.technologies.map((tech) => (
                        <Tag key={tech} colorScheme="blue">
                          {tech}
                        </Tag>
                      ))}
                    </Stack>
                  </VStack>
                </Box>
              </WrapItem>
            ))}
          </Wrap>

          <Button mt={10} colorScheme="blue" size="lg">
            View More Developers 
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
