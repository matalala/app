import React from "react";
import styled from "styled-components";
import imguno from '../resource/img/img-programando-1.png'
import imgdos from '../resource/img/img-programando-2.png'

const Contenuno=styled.div`
margin: 10px 10px 10px 10%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: nowrap;
    
    `
const Img=styled.img`
width: 100%;
max-width: 400px;
background-color: rgba(34, 48, 38, 0.49);
border-radius: 20%;
padding: 10%;
`
const Contendos=styled.div`
margin: 10px 10px 10px 10%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: nowrap;`
export default function Inicio(){
    const fecha= new Date()
    const nacimiento=new Date('08/04/1995')
       const dif={
        mes:(fecha.getMonth()+1)-(nacimiento.getMonth()+1),
        dia:(fecha.getDate()-nacimiento.getDate()),
        año:fecha.getFullYear()-nacimiento.getFullYear()
    }
    if(dif.mes<0||dif.dia<0){
        dif.año=dif.año-1
    }
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
                <h1>SOBRE MI!&#128512;</h1>
                <h3>tengo {dif.año} años&#x1F468;</h3>
                <h3>soy un apacionado por la programacion &#128187;</h3>
                </div>
            </Contendos>

          </div>
        </div>
    )
}