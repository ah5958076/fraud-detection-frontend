import {FEATURED_IMAGE} from "../../constants/images";
import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import { DETECTION_ROUTE } from '../../constants/routes';
import { useNavigate } from 'react-router';


function Home() {
    const navigate = useNavigate();

    return (
        
        <>

            <Box w="100%" position="relative">
                <Image w="100%" aspectRatio={2/1} src={FEATURED_IMAGE} alt='Thumbnail' />
                <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" gap="10px" position="absolute" width="100%" height="100%" bg="rgba(0,0,0,0.8)" top={0} left={0}>
                    <Text p="10px" textAlign="center" color="white" fontSize='md'>Here you can check your reviews such that they are fake or not</Text>
                    <Button colorScheme='red' onClick={()=>navigate(DETECTION_ROUTE)}>Get Started</Button>
                </Box>
            </Box>

            <Box id='about' mt="50px">
                <Heading textAlign="center">About US</Heading>
                <Text>We are here to provide you the best services about the fraud detection</Text>
            </Box>

        </>


    )
}

export default Home