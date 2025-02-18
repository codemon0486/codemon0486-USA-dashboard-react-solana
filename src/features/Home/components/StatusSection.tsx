import { Box, Text, Grid, Flex } from '@chakra-ui/react'
type Farm = {
  name: string
  apr: string
  title: string
}

type StatusSectionProps = {
  farms: Farm[]
  title: string
}
const StatusSection: React.FC<StatusSectionProps> = ({ farms, title }) => {
  return (
    <Box>
      <Flex>
        <Text fontWeight="bold" fontSize="xl" color="#E6C066">
          {title}
        </Text>
        <Text fontSize="xl" px={2}>
          {' '}
          ⇅
        </Text>
      </Flex>
      <Box
        bg="#222222"
        borderBottom="1px solid #E6C066"
        py={4}
        px="2"
        pr="14"
        borderRadius="md"
        color="white"
        fontFamily="monospace"
        w="100%"
      >
        <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} w="100%">
          {farms.map((farm, index) => (
            <Box key={index} p={6} borderRight="1px solid #E6C066" textAlign="center" w="100%">
              <Text fontWeight="bold" fontSize="lg" color="white">
                {farm.name}
              </Text>
              <Text fontSize="xl" fontWeight="bold">
                {farm.apr}
              </Text>
              <Text fontSize="xl">APR</Text>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default StatusSection
