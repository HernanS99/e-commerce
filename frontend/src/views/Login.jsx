import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import React from "react"
import { useEffect, useState } from "react"
import { useContext } from 'react';
import UserContext from '../context/UserContext';
 
const Login = () => {
    const state = useContext(UserContext)
    const [user, setUser] = useState({})
    const handleInput = (evento) => {
        const { value, name } = evento.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const signin = async () => {
            state.login(user)
    }

        return (
            <section className="vh-100 gradient-custom">
                <Toaster/>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white">
                                <div className="card-body p-5 text-center">
                                     <div className="mb-md-5 mt-md-4 pb-5">
                                        <h2 className="fw-bold mb-2 text-uppercase">Iniciar Sesión</h2>
                                        <p className="text-white-50 mb-5">Ingresa los datos solicitados</p>

                                        <div className="form-outline form-white mb-4">
                                            <input type="email" id="typeEmailX" name="correo" className="form-control form-control-lg" onChange={(evento) => handleInput(evento)} />
                                            <label className="form-label">Correo</label>
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <input type="password" id="typePasswordX" name="password" className="form-control form-control-lg" onChange={(evento) => handleInput(evento)} />
                                            <label className="form-label">Contraseña</label>
                                        </div>

                                        <button className="btn btn-outline-light btn-lg px-5" type="button"  onClick={signin} >Login</button>
                                    </div> 
                                     <div>
                                        <p className="mb-0">No tienes una cuenta? <Link to="/register" className='styleRegister'>Registrarse</Link>
                                        </p>
                                    </div> 

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    export default Login