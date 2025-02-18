import { Box, Text, Grid, Button, Image, VStack, HStack, Flex } from '@chakra-ui/react'
<<<<<<< HEAD
import { FileText } from 'react-feather'
=======
import { useRouter } from 'next/router'
>>>>>>> bdcf1ae528637435ee545ffdbebd3823cdbfc297

const Footer = () => {
  const router = useRouter()
  const currentPath = router.pathname
  return (
<<<<<<< HEAD
    <Box borderTop={{ base: '0px', md: '1px solid #E6C066' }} mt="20" p={6} color="white" fontFamily="monospace" w="100%">
      <Flex gap={6} direction={{ base: 'column', md: 'row' }} justifyContent="space-around">
        <Box
          borderRight={{ base: '0px', md: '1px solid #E6C066' }}
          w={{ base: 'full', sm: '80%' }}
          mx={{ base: '0px', sm: 'auto' }}
          borderRadius="md"
          pr={6}
        >
          <VStack w="full" spacing={5}>
            <Flex direction="column" justifyContent="space-around" fontSize="md" lineHeight="1.8">
=======
    <Box
      borderTop={{ base: '', lg: '1px solid #E6C066' }}
      display={currentPath === '/dashboard' && { base: 'block', lg: 'none' }}
      mt="20"
      p={6}
      color="white"
      fontFamily="monospace"
      w="100%"
    >
      <Flex gap={20}>
        <Box borderRight="1px solid #E6C066" borderRadius="md" pr={6}>
          <VStack align="start" spacing={3}>
            <Box lineHeight="1.8" w="full">
>>>>>>> bdcf1ae528637435ee545ffdbebd3823cdbfc297
              <Flex>
                <Text w="50%">Max Supply:</Text>
                <Text as="span">900,000,000</Text>
              </Flex>
              <Flex>
                <Text w="50%">Market Cap:</Text>
                <Text as="span">140 thousand</Text>
              </Flex>
              <Flex>
                <Text w="50%">Total Burned:</Text>
                <Text as="span">70001193.3228</Text>
              </Flex>
            </Flex>
            <HStack>
              <Image src="/images/footer/phantom.png" alt="footer" w={34} />
              <Text
                fontWeight="semibold"
                fontSize={{ base: 'lg', sm: 'xl' }}
                px={{ base: 2, sm: '4' }}
                borderRadius="md"
                borderX="2px solid #E6C066"
                bg="#AB9FF2"
              >
                BUY
              </Text>
              <Image src="/images/token-logo.png" alt="USA Token" boxSize="24px" />
              <Text>$ 0.004077</Text>
            </HStack>
          </VStack>
        </Box>
        <Flex w="100%" justifyContent="space-around" flexWrap={{ base: 'wrap', sm: 'nowrap' }}>
          <VStack align="start">
            <Box lineHeight="1.5">
              <Text fontWeight="bold" fontSize={{ base: 'md', sm: 'lg' }}>
                ABOUT
              </Text>
              <Text>Info</Text>
              <Text>Docs</Text>
              <Text>USA Token</Text>
            </Box>
          </VStack>
          <VStack align="start">
            <Text fontWeight="bold" fontSize={{ base: 'md', sm: 'lg' }}>
              SERVICES
            </Text>
          </VStack>
          <VStack align="center" w={{ base: '100%', sm: 'auto' }}>
            <Text fontWeight="bold" textAlign="center" fontSize={{ base: 'lg', sm: 'xl' }}>
              COMMUNITY
            </Text>
            <HStack spacing={3}>
              <Image src="/images/footer/telegram.png" alt="telegram" w={{ base: '6', sm: '8' }} />
              <Image src="/images/footer/tiktok.png" alt="telegram" w={{ base: '6', sm: '8' }} />
              <Image src="/images/footer/x.png" alt="telegram" w={{ base: '6', sm: '8' }} />
            </HStack>
          </VStack>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Footer
