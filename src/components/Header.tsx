import { Box, Flex, Center } from '@chakra-ui/react'
import { useState } from 'react'

export default function HeaderComonents() {
    return (
        <>
            <Box as='header' w={'100%'}>
                <Flex w={'100%'} justifyContent={'flex-end'}>
                    <Flex flexDir={'column'} gap={'1.5rem'} w={'10em'} h={'10em'} bgColor={'#ff9d9d'}>
                        <Box as='span' border={'2px solid #fff'} margin={'2rem auto 0'} w={'80%'}></Box>
                        <Box as='span' border={'2px solid #fff'} margin={'1rem auto 0'} w={'80%'}></Box>
                        <Box as='span' border={'2px solid #fff'} margin={'1rem auto 0'} w={'80%'}></Box>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}