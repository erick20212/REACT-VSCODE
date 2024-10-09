import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/api/autores";

const SpeciePost = () => {
    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [pais, setPais] = useState("");
    const [estado, setEstado] = useState("");
    const [foto, setFoto] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario
        const formulario = {
            nombres: nombres,
            apellidos: apellidos,
            pais: pais,
            estado: estado,
            foto: foto,
        };
        axios.post(API_URL, formulario)
            .then(response => {
                console.log('creado correctamente:', response);
                // Limpiar el formulario después de un envío exitoso
                setNombres("");
                setApellidos("");
                setPais("");
                setEstado("");
                setFoto("");
            })
            .catch(error => {
                console.error('no se pudo crear', error);
            });
    };

    return (
        <div className="container my-5">
            <div className="bg-light p-5 rounded-4 shadow">
                <h3 className="mb-4">Agregar Autor</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nombres" className="form-label">Nombres</label>
                        <input
                            className="form-control"
                            id="nombres"
                            value={nombres}
                            onChange={(e) => { setNombres(e.target.value); }}
                            type="text"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="apellidos" className="form-label">Apellidos</label>
                        <input
                            className="form-control"
                            id="apellidos"
                            value={apellidos}
                            onChange={(e) => { setApellidos(e.target.value); }}
                            type="text"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pais" className="form-label">País</label>
                        <input
                            className="form-control"
                            id="pais"
                            value={pais}
                            onChange={(e) => { setPais(e.target.value); }}
                            type="text"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="estado" className="form-label">Estado</label>
                        <input
                            className="form-control"
                            id="estado"
                            value={estado}
                            onChange={(e) => { setEstado(e.target.value); }}
                            type="text"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="foto" className="form-label">Foto (URL)</label>
                        <input
                            className="form-control"
                            id="foto"
                            value={foto}
                            onChange={(e) => { setFoto(e.target.value); }}
                            type="text"
                            placeholder="Ingresa la URL de la imagen"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </form>
            </div>
        </div>
    );
};

export default SpeciePost;
