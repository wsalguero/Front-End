import React from 'react'
import { useNavigate } from "react-router-dom";
import Navar_user from '../../components/Navars/Navar_user'
import CardUser from '../../elements/Cards/CardUser'
import Footer from '../../components/footer/Footer'

const UserVeiw = () => {
  return (
    <div>
        <div>
            <Navar_user></Navar_user>
        </div>
        <div>
            <CardUser></CardUser>
        </div>
        <div>
            <Footer></Footer>
        </div>
      
    </div>
  )
}

export default UserVeiw
