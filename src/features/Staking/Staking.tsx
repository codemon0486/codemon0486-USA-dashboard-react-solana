import { Box, HStack, Skeleton, VStack } from '@chakra-ui/react'

import PageHeroTitle from '@/components/PageHeroTitle'
import useFetchStakePools from '@/hooks/pool/useFetchStakePools'
import useFarmPositions from '@/hooks/portfolio/farm/useFarmPositions'
import { useTranslation } from 'react-i18next'
import StakingPoolItem from './components/StakingPoolItem'
import SolWallet from '@/components/SolWallet'
import PageHeroImg from '@/components/PageHeroImg'

export type StakingPageQuery = {
  dialog?: 'unstake' | 'stake'
  open?: string // token mint
}

export default function Staking() {
  const { t } = useTranslation()
  const { activeStakePools, isLoading } = useFetchStakePools({})
  const { lpBasedData } = useFarmPositions({})

  return (
    <Box>
      {/* <Box mb={[4, 8]}>
        <PageHeroTitle title={t('staking.title')} description={t('staking.staking_desc') || ''} />
      </Box> */}
      <HStack className="hWalletBtn" justify="end">
        <SolWallet title="" />
      </HStack>
      <VStack>
        <PageHeroImg />
        {/* <PageHeroTitle title={t('dashboard.hero_title')} /> */}
      </VStack>
      {isLoading ? (
        // <Skeleton width="80%" height="20px" />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="/images/pendulum.gif" alt="" />
        </div>
      ) : (
        activeStakePools.map((pool, index) => (
          <StakingPoolItem key={pool.id} pid={index} pool={pool} apiVaultData={lpBasedData.get(pool?.lpMint.address || '')} />
        ))
      )}
    </Box>
  )
}
