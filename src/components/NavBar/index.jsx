import { Box, Heading, Link } from "@chakra-ui/react"
import { DETECTION_ROUTE, HOME_ROUTE } from "../../constants/routes"
import { useLocation } from "react-router"

function NavBar() {
    const location = useLocation()
    const onDetection = location.pathname==="/detection";

    return (

        <Box display="flex" gap="10px" p="20px" justifyContent="space-between">
            <Heading size={"md"}>Fraud Gaurd</Heading>
            <Box display="flex" gap="10px">
            <Link colorScheme='red' href={HOME_ROUTE}>Home</Link>
            <Link colorScheme='red' href={DETECTION_ROUTE}>Detection</Link>
            {onDetection?"":<Link colorScheme='red' href={`#about`}>About Us</Link>}
            </Box>
        </Box>

    )
}

export default NavBar