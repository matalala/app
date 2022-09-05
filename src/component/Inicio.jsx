import React from "react";
import imguno from '../resource/img/img-programando-1.png'
import imgdos from '../resource/img/img-programando-2.png'
export default function Inicio(){
    return(
        <div>
          <div>

            <div>
                <h1>HOLA!</h1>
                <h3>mi nombre es </h3>
                <h3>Victor Cavallo</h3>
                <h3>#Soy programador </h3>
                <h3>Full Stack DEV</h3>
            </div>
            <div>
                <img src={imguno} alt="" />
            </div>
            <div></div>
            <div>
            <img src={imgdos} alt="" />
            </div>
          </div>
        </div>
    )
}