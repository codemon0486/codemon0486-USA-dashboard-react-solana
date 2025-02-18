import { Flex, Box, Text, Image } from '@chakra-ui/react'
import React from 'react'

function HeroSection() {
  return (
    <Flex direction={{ base: 'column-reverse', lg: 'row' }} justifyContent={{ base: 'center', lg: 'space-around' }} w="full" mt="10">
      <Box>
        <Text fontSize={{ base: 'lg', xl: '2xl' }} textAlign="start" lineHeight="6">
          short description textshort description textshort description textshort description textshort description textshort description
          text short description textshort description textshort description textshort description textshort description textshort
          description textshort description textshort description textshort description textshort description text
        </Text>
        <Box w={{ base: '40', xl: '48', '2xl': '48' }} my="10" borderRadius="sm" bg="#222222" borderX="2px solid #E6C066">
          <Text textAlign="center" py="2" fontSize={{ base: 'md', lg: 'md', xl: '2xl', '2xl': '2xl' }}>
            Trade Now
          </Text>
        </Box>
      </Box>
      <Image src="/images/home/main.png" alt="main" w="50%" mx="auto" h={{ base: '80%', xl: '44%' }} />
    </Flex>
  )
}

export default HeroSection
