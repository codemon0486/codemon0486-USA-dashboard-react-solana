import { Box, Text, Grid, Button, Image, VStack, HStack, Flex } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box borderTop="1px solid #E6C066" mt="20" p={6} color="white" fontFamily="monospace" w="100%">
      <Flex gap={20}>
        <Box borderRight="1px solid #E6C066" borderRadius="md" pr={6}>
          <VStack align="start" spacing={3}>
            <Box lineHeight="1.8" w="full">
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
            </Box>
            <HStack>
              <Image src="/images/footer/phantom.png" alt="footer" w={34} />
              <Text fontWeight="semibold" fontSize="xl" px="4" borderRadius="md" borderX="2px solid #E6C066" bg="#AB9FF2">
                BUY
              </Text>
              <Image src="/images/token-logo.png" alt="USA Token" boxSize="24px" />
              <Text>$ 0.004077</Text>
            </HStack>
          </VStack>
        </Box>
        <Flex w="60%" justify="space-around">
          <VStack align="start">
            <Box lineHeight="1.5">
              <Text fontWeight="bold" fontSize="xl">
                ABOUT
              </Text>
              <Text>Info</Text>
              <Text>Docs</Text>
              <Text>USA Token</Text>
            </Box>
          </VStack>
          <VStack align="start">
            <Text fontWeight="bold" fontSize="xl">
              SERVICES
            </Text>
          </VStack>
          <VStack align="start">
            <Text fontWeight="bold" textAlign="center" fontSize="xl">
              COMMUNITY
            </Text>
            <HStack spacing={3}>
              <Image src="/images/footer/telegram.png" alt="telegram" w={8} />
              <Image src="/images/footer/tiktok.png" alt="telegram" w={8} />
              <Image src="/images/footer/x.png" alt="telegram" w={8} />
            </HStack>
          </VStack>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Footer
