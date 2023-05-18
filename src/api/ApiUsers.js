import axios from "axios";
import Swal from "sweetalert2";
const token = localStorage.getItem("token");
const URL = `http://localhost:8080/api`;

export const getUsers = async() => {
    try {
        const { data: { listaUsuarios} } =  await axios.get(`${URL}/usuarios/mostrar`);
        //console.log(listaProductos);
        return listaUsuarios;
    } catch (error) {
        console.log("error en la petición");
    }
}


export const postProduct = async(nombre, precio, descripcion, categoria) => {
    try {
        const response  = await axios.post(`${URL}/productos/agregar`, {
            nombre, 
            precio,
            descripcion,
            categoria
        }, { headers: {"x-token": token} } );
        //console.log(response);

        if (response) {
            Swal.fire({
                icon: "success",
                title: " ! Producto agregado con exito ! ",
                text: " ¡ Correcto ! ",
                confirmButtonText: "Ok",
            });
        }

        return true;

    } catch ( { response: { data: { msg }} } ) {
        
        Swal.fire({
            icon: "error",
            title: "Error al agregar un producto",
            text: `${ msg }`,
        });
        
        return false;

    }
}