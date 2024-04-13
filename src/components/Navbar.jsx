import React from 'react';
import { Box, Flex, Link, Spacer } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
  return (
    <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
      <Box p="2">My Website</Box>
      <Spacer />
      <Box>
        <Link as={RouterLink} to="/" p={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/about" p={2}>
          About
        </Link>
        <Link as={RouterLink} to="/services" p={2}>
          Services
        </Link>
        <Link as={RouterLink} to="/contact" p={2}>
          Contact
        </Link>
      </Box>
    </Flex>
  );
}

export default Navbar;