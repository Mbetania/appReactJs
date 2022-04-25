import React from 'react'
import { BrowserRouter, Route , Routes} from 'react-router-dom'
import { WelcomeContainer } from '../pages/WelcomeContainer'

export const AppRoutes = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path='welcome/*' element={ <WelcomeContainer/>}/>
        </Routes>

    </BrowserRouter>
    )
}
