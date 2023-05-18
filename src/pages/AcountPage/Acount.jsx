import React, { useState, useEffect } from 'react';
import "../../assets/resources/css/acountStyle.css"
import Navar_user from '../../components/Navars/Navar_user';

  
export const Acount = () => {
  const [image, setImage] = useState(localStorage.getItem('userImage') || null);
  const [alert, setAlert] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
      localStorage.setItem('userImage', reader.result);
    };

    if (file) {
      const fileExtension = file.name.split('.').pop().toLowerCase();
      if (fileExtension === 'jpg' || fileExtension === 'png') {
        reader.readAsDataURL(file);
        setAlert(null);
      } else {
        setAlert('Solo se permiten archivos JPG y PNG.');
      }
    }
  };

  useEffect(() => {
    if (image) {
      localStorage.setItem('userImage', image);
    }
  }, [image]);

  return (
    <div>
     

      <Navar_user></Navar_user>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="container">
              <img className="content" src={image} alt="" />
              <br />
              <input className="content" type="file" onChange={handleFileChange} />
            </div>
          </div>
          <div className="col">
            <h1 id="datosusuario">Datos del Usuario:</h1>
            <br />
            <h1 id="inputsDatos">Nombre Apellido</h1>
            <div className="input-group flex-nowrap">
              <input id="inputs" type="text" className="form-control" placeholder="nombre completo" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <br />
            <h1 id="inputsDatos">Correo:</h1>
            <div className="input-group flex-nowrap">
              <input id="inputs" type="text" className="form-control" placeholder="correo electrónico" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <br />
            <h1 id="inputsDatos">Numero Telefónico</h1>
            <div className="input-group flex-nowrap">
              <input id="inputs" type="text" className="form-control" placeholder="número de teléfono" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <br />
            <h1 id="inputsDatos">Datos Adicionales</h1>
            <div className="input-group flex-nowrap">
              <input id="inputs" type="text" className="form-control" placeholder="datos sobre el usuario" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <button type="button" className="btn btn-primary">Editar</button>
            {alert && <div className="alert alert-danger mt-3 alert-left">{alert}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};