import { useTranslation } from 'react-i18next'
import { Box, HStack, VStack, Text } from '@chakra-ui/react'
import PageHeroTitle from '@/components/PageHeroTitle'
import SectionMyCreatedFarms, { CreateFarmTabValues } from './components/SectionMyFarms'
import SectionMyPositions from './components/SectionMyPositions'
import { PositionTabValues } from '@/hooks/portfolio/useAllPositionInfo'
import SectionOverview from './components/SectionOverview'
import SectionAcceleraytor from './components/SectionIdo'
import { Desktop } from '@/components/MobileDesktop'
import { AcceleraytorAlertChip } from './AcceleraytorAlertChip'
import PageHeroImg from '@/components/PageHeroImg'
import SolWallet from '@/components/SolWallet'
import Footer from '@/components/Footer/index'

export type DashboardPageQuery = {
  section?: 'overview' | 'my-positions' | 'my-created-farm' | 'acceleraytor'
  position_tab?: PositionTabValues
  create_farm_tab?: CreateFarmTabValues
}

export default function Dashboard() {
  const { t } = useTranslation()

  return (
    <Box overflowX="hidden">
      <HStack className="hWalletBtn" justify="end">
        <SolWallet />
      </HStack>
      <VStack>
        <Text
          p={2}
          display={{ base: 'block', lg: 'none' }}
          fontFamily={'Digital Cards Demo'}
          textAlign="center"
          fontSize="2xl"
          textColor="#E6C066"
        >
          DASHBOARD
        </Text>
        <PageHeroImg />
        {/* <PageHeroTitle title={t('dashboard.hero_title')} /> */}
      </VStack>
      <AcceleraytorAlertChip />
      <SectionOverview />
      {/* <SectionMyPositions />
      <SectionMyCreatedFarms />
      <SectionAcceleraytor /> */}
      <Box pb={'40px'} />
      <Footer />
    </Box>
  )
}
