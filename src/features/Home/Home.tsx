import { Box, HStack, VStack } from '@chakra-ui/react'
import HeadImages from './components/HeadImages'
import SolWallet from '@/components/SolWallet'
import HeroSection from './components/HeroSection'

export type StakingPageQuery = {
  dialog?: 'unstake' | 'stake'
  open?: string // token mint
}

export default function Staking() {
  return (
    <Box>
      {/* <Box mb={[4, 8]}>
        <PageHeroTitle title={t('staking.title')} description={t('staking.staking_desc') || ''} />
      </Box> */}
      <HStack className="hWalletBtn" justify="end">
        <SolWallet />
      </HStack>
      <VStack>
        <HeadImages />
        <HeroSection />
      </VStack>
    </Box>
  )
}
