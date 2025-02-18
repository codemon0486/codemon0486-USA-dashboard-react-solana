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
      <Box bg="#222222" borderBottom="1px solid #E6C066" py={4} pr="6" borderRadius="md" color="white" fontFamily="monospace" w="100%">
        <Flex w="100%">
          {farms.map((farm, index) => (
            <Box
              key={index}
              py={6}
              px={3}
              fontSize={{ base: '6px', sm: 'xs', md: 'lg' }}
              borderRight="1px solid #E6C066"
              textAlign="center"
              w="100%"
            >
              <Text fontWeight="bold" color="white">
                {farm.name}
              </Text>
              <Text fontWeight="bold">{farm.apr}</Text>
              <Text>APR</Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  )
}

export default StatusSection
