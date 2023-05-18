import React from 'react'
import { useNavigate } from "react-router-dom";
import Navar_admin from '../../components/Navars/Navar_admin';
import Cards from '../../elements/Cards/CardAdmin';
import Footer from '../../components/footer/Footer';

const VistaAdmin = () => {
    const navigate = useNavigate();

    return (
        <>
            <div>
                <Navar_admin />
            </div>

            <div>
                <Cards />
            </div>

            <div>
                <Footer />
            </div>
        </>
    )
}

export default VistaAdmin
