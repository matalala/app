import React from "react";
import styled from "styled-components";
import imguno from '../resource/img/img-programando-1.png'
import imgdos from '../resource/img/img-programando-2.png'

const Contenuno=styled.div`
margin: 10px 10px 10px 15%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: nowrap;
    
    `
const Img=styled.img`
background-color: rgba(34, 48, 38, 0.49);
border-radius: 20%;
padding: 10%;
`
const Contendos=styled.div`
margin-left: 15%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: nowrap;`
export default function Inicio(){
    return(
        <div>
          <div>
            
            <Contenuno >
                <div>
                    <h1>HOLA!</h1>
                    <h3>mi nombre es </h3>
                    <h3>Victor Cavallo</h3>
                    <h3>#Soy programador </h3>
                    <h3>Full Stack DEV</h3>
                </div>
                <div>
                    <Img src={imguno} alt="" />
                </div>
            </Contenuno>

            <Contendos >
                <div>
                    <Img src={imgdos} alt="" />
                </div>
                <div>
                <h1>HOLA!</h1>
                    
                </div>
            </Contendos>

          </div>
        </div>
    )
}