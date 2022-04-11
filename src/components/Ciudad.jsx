import React from "react";
// import { useParams } from 'react-router-dom';


export default function Ciudad({cities}) {


    // const { id } = useParams(); 



    return (
        <div className="ciudad">
                <div className="container">
                    <h2>{cities[0].name}</h2>
                    <div className="info">
                        <div>Temperatura: {cities[0].temp} ºC</div>
                        <div>Clima: {cities[0].weather}</div>
                        <div>Viento: {cities[0].wind} km/h</div>
                        <div>Cantidad de nubes: {cities[0].clouds}</div>
                        <div>Latitud: {cities[0].latitud}º</div>
                        <div>Longitud: {cities[0].longitud}º</div>
                    </div>
            </div>
        </div>
    )
}