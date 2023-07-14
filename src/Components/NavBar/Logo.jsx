

import { Box,Button, useColorMode} from '@chakra-ui/react'

const Logo = () => {

    const {toggleColorMode} = useColorMode();
    
        

    return (
        <Box className='logo'>
            <Button mt={6} ml='10rem' bg='#4C4CF0' borderRadius='50%' color='white' _hover={{bg:'#A9B1EA', color:'black'}} onClick={toggleColorMode}> DA</Button>

            
        </Box>
    );
}

export default Logo;