import { Box, Flex, Center } from '@chakra-ui/react'

export default function HeaderComonents() {
    return (
        <>
            <Box as='header' w={'100%'}>
                <Flex w={'100%'} justifyContent={'flex-end'}>
                    <Box w={'10em'} h={'10em'} bgColor={'#ff9d9d'}>
                        <Box as='span'></Box>
                        <Box as='span'></Box>
                        <Box as='span'></Box>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}