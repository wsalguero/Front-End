export const User = ( { nombre, correo, rol} ) => {
  

    return (
      <>
        <tr>
          <th> { nombre } </th>
          <td> { correo } </td>
          <td> { rol } </td>
          <td>
            <button className="btn btn-warning m-1">Editar</button>
            <button className="btn btn-danger m-1">Eliminar</button>
          </td>
        </tr>
      </>
    )
  } 