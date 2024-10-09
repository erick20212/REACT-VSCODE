import React, { useState, useEffect } from "react";
import axios from 'axios';

const API_URL = "http://localhost:8080/api/autores";

const SpecieFetch = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(API_URL)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log("No se pudo recuperar la API", error);
            });
    }, []);

    return (
        <div className="m-5">
            <h3 className="text-center">VISTA DE AUTORES</h3>
            <div className="row">
                {data.map(item => (
                    <div className="col-6 mb-3" key={item.id}> 
                        <div className="gb-ligth rounded-4 shadow p-3">
                            <h4>nombres: {item.nombres}</h4>
                            <h4>apellidos: {item.apellidos}</h4>
                            <h4>pais: {item.pais}</h4>
                            <h4>estado: {item.estado}</h4>
                            <img src={item.foto} alt={`${item.nombres} ${item.apellidos}`} className="img-fluid mb-2" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpecieFetch;

