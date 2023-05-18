import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiLogin } from "../../api/apiLogin";

export const Login = () => {

  //manejo de inputs
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resultado = await apiLogin(correo, password);
    if (resultado === false) return null;
    navigate('/products');
  }

    return (
        <>
            <div>
                <div id="central">
                    <div id="login">
                        <div className="titulo">
                            Bienvenido a Traveling
                        </div>
                        <form id="loginform" onSubmit={handleSubmit}>
                            <label className="form-label">Correo Electronico</label>
                            <input
                                type="email"
                                className="form-control"
                                name="correo"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                            />

                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <button type="submit" className="btn btn-primary">Iniciar Sesión</button>

                        </form>
                        <div className="pie-form">
                            <a href="#">¿Perdiste tu contraseña?</a>
                            <a href="#">¿No tienes Cuenta? Registrate</a>
                        </div>
                    </div>
                    <div className="inferior">
                        <a href="Principal.jsx">Volver</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
