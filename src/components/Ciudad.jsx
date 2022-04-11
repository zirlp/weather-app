import React from "react";
import { useParams } from 'react-router-dom';
import "./Ciudad.css"


export default function Ciudad({cities}) {

    const { id } = useParams(); 

    const detail = cities.filter(c => c.id === Number(id) )

    return (
        <div className="ciudad">
                <div className="container">
                    
                    <div className="info">
                        <h2>{`${detail[0].name}, ${detail[0].country}`}</h2>
                        <div>Temp: {detail[0].temp} ºC</div>
                        <div>Wind: {detail[0].wind} km/h</div>
                        <div>Latitude: {detail[0].latitud}º</div>
                        <div>Longitude: {detail[0].longitud}º</div>
                    </div>
            </div>
        </div>
    )
}