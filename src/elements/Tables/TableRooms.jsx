import React from 'react'

import '../../assets/resources/css/tablesStyle.css'

const TableRooms = () => {
  return (
    <>
      <h2 className="table-title">Habitaciones</h2>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Tipo de Habitación</th>
                        <th>Capacidad</th>
                        <th>Número de Habitación</th>
                        <th>Disponibilidad</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Habitación Individual</td>
                        <td>1 persona</td>
                        <td>101</td>
                        <td>Disponible</td>
                    </tr>
                    <tr>
                        <td>Habitación Doble</td>
                        <td>2 personas</td>
                        <td>105</td>
                        <td>Disponible</td>
                    </tr>
                    <tr>
                        <td>Habitación Estandar</td>
                        <td>3-4 personas</td>
                        <td>201</td>
                        <td>No disponible</td>
                    </tr>
                    <tr>
                        <td>Habitación Familiar</td>
                        <td>5 personas</td>
                        <td>110</td>
                        <td>Disponible</td>
                    </tr>
                    <tr>
                        <td>Habitación Suite</td>
                        <td>7 personas</td>
                        <td>205</td>
                        <td>Disponible</td>
                    </tr>
                </tbody>
            </table>
    </>
  )
}

export default TableRooms
