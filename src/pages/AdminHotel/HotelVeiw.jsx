import React from 'react'
import Navar_aHotel from '../../components/Navars/Navar_aHotel'
import TablesUsers from '../../elements/Tables/TablesUsers'
import TableReservations from '../../elements/Tables/TableReservations'
import TableRooms from '../../elements/Tables/TableRooms'

const HotelVeiw = () => {
    return (
        <>
            <div>
                <Navar_aHotel></Navar_aHotel>
            </div>
            
            <div>
                <TablesUsers></TablesUsers>
                <TableReservations></TableReservations>
                <TableRooms></TableRooms>
            </div>
        </>
    )
}

export default HotelVeiw
