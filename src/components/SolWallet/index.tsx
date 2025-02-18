import { useCallback } from 'react'
import { Box, Button, HStack, Text, Image, useDisclosure } from '@chakra-ui/react'
import { Wallet, useWallet } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { useEvent } from '@/hooks/useEvent'
import WalletRecentTransactionBoard from '../WalletRecentTransactionBoard'
import SelectWalletModal from './SelectWalletModal'
import ChevronDownIcon from '@/icons/misc/ChevronDownIcon'
import { colors } from '@/theme/cssVariables'
import { encodeStr } from '@/utils/common'
import { useAppStore } from '@/store/useAppStore'
import { useTranslation } from 'react-i18next'
import solwalletStyles from './solwallet.module.css'

export default function SolWallet() {
  const { wallets, select, disconnect, connected, connecting, wallet } = useWallet()
  const { t } = useTranslation()
  const publicKey = useAppStore((s) => s.publicKey)
  const { setVisible, visible } = useWalletModal()
  const { isOpen: isWalletDrawerShown, onOpen, onClose } = useDisclosure()

  const handleClose = useCallback(() => setVisible(false), [setVisible])
  const handleOpen = useCallback(() => setVisible(true), [setVisible])

  const handleSelectWallet = useEvent((wallet: Wallet) => {
    select(wallet.adapter.name)
    handleClose()
  })

  if (connected)
    return (
      <>
        <WalletRecentTransactionBoard
          wallet={wallet}
          address={publicKey?.toBase58() || ''}
          onDisconnect={disconnect}
          isOpen={isWalletDrawerShown}
          onClose={onClose}
        />
        <HStack
          cursor="pointer"
          onClick={onOpen}
          py="5px"
          px={['8px', '8px']}
          backgroundColor="#22D1F8"
          color={'black'}
          borderRadius="8px"
          overflow="hidden"
          width={'120px'}
          // border={'2px solid #822eda'}
        >
          <Text fontSize="sm">{encodeStr(publicKey?.toBase58(), 4)}</Text>
          {/* <Box flex={'none'}>
            <ChevronDownIcon width={12} height={12} />
          </Box> */}
          {wallet && (
            <Box flex="none" rounded="full" overflow="hidden">
              <Image src={wallet.adapter.icon} width={['24px', '24px']} height={['24px', '24px']} />
            </Box>
          )}
        </HStack>
      </>
    )
  return (
    <Box>
      <Button
        isLoading={connecting}
        loadingText="Connecting.."
        onClick={handleOpen}
        // style={{
        //   background: 'rgb(7, 8, 11)',
        //   border: '2px solid rgb(130, 46, 218)',
        //   color: 'white',
        //   borderRadius: '100px',
        //   fontSize: '16px',
        //   padding: '0px 12px'
        // }}
        variant={'solid'}
      >
        {t('button.connect_wallet')}
      </Button>
      <SelectWalletModal wallets={wallets} isOpen={visible} onClose={handleClose} onSelectWallet={handleSelectWallet} />
    </Box>
  )
}
