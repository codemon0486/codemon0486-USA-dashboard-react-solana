import { Flex, Box, Text, Image } from '@chakra-ui/react'
import React from 'react'

function HeroSection() {
  return (
    <Flex justifyContent="space-around" mt="10">
      <Box>
        <Text fontSize={{ base: 'md', xl: '2xl', '2xl': '2xl' }} textAlign="start" lineHeight="6">
          short description textshort description <br /> textshort description textshort description <br />
          textshort description textshort description <br /> text short description textshort <br /> description textshort description
          textshort <br /> description textshort description textshort <br /> description textshort description textshort <br /> description
          textshort description textshort <br /> description text
        </Text>
        <Box w="48" my="10" borderRadius="sm" bg="#222222" borderX="2px solid #E6C066">
          <Text textAlign="center" py="2" fontSize="2xl">
            Trade Now
          </Text>
        </Box>
      </Box>
      <Image src="/images/home/main.png" alt="main" w={{ base: '40%', xl: '44%', '2xl': '44%' }} />
    </Flex>
  )
}

export default HeroSection
