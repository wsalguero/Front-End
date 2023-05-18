import React from 'react'
import Footer from './components/footer/Footer'
import { Card } from 'react-bootstrap'
import Navar_aHotel from './components/Navars/Navar_aHotel'
import Cards from './elements/Cards/CardAdmin'
import { Outlet } from 'react-router-dom'

export const Principal = () => {
    return (
        <>
            <Outlet/>
             <div>
                <Navar_aHotel/>
            </div>

            <div>
                <Cards/>
            </div>

            <div>
                <Footer/>
            </div>

        </>

    )
}

