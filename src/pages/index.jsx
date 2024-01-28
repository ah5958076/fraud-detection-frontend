import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import Detection from './detection'
import { DETECTION_ROUTE, HOME_ROUTE } from '../constants/routes'
import NavBar from "../components/NavBar";


function Root() {
    return (
    
        <BrowserRouter>

            <NavBar/>
        
            <Routes>

                <Route path={HOME_ROUTE} element={<Home/>} />
                <Route path={DETECTION_ROUTE} element={<Detection/>} />

            </Routes>

        </BrowserRouter>

    )
}

export default Root