import React from 'react'
import '../../assets/resources/css/tablesStyle.css'


const TableReservations = () => {
  return (
    <>
      <h2 className="table-title">Reservaciones</h2>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Hotel</th>
                        <th>Nombre del cliente</th>
                        <th>Apellido del cliente</th>
                        <th>Fecha de entrada</th>
                        <th>Fecha de salida</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Hotel Royal</td>
                        <td>Carlos Daniel</td>
                        <td>Martinez Garcia</td>
                        <td>2023-06-09</td>
                        <td>2023-06-17</td>
                    </tr>
                    <tr>
                        <td>Tikal Futura Hotel</td>
                        <td>Susana Rocio</td>
                        <td>Lopez Bravo</td>
                        <td>2023-11-13</td>
                        <td>2023-11-20</td>
                    </tr>
                    <tr>
                        <td>Hotel Clarion</td>
                        <td>Gustavo Patricio</td>
                        <td>Ordoñez Diaz</td>
                        <td>2023-09-22</td>
                        <td>2023-09-30</td>
                    </tr>
                    <tr>
                        <td>Hotel Barcelo</td>
                        <td>Luis Arnoldo</td>
                        <td>Mendez Zapata</td>
                        <td>2023-12-21</td>
                        <td>2023-12-28</td>
                    </tr>
                    <tr>
                        <td>Hotel Ocean</td>
                        <td>Juan Jose</td>
                        <td>Ortega Garcia</td>
                        <td>2023-08-17</td>
                        <td>2023-08-24</td>
                    </tr>
                </tbody>
            </table>

            <br></br>
    </>
  )
}

export default TableReservations
