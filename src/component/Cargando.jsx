import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const GifConten=styled.div`
    width:100%;
    height:0;
    padding-bottom:75;
    position:relative;
    iframe{
          width:500px; 
        height:500px; 
    }
`
// const Gif=styled.iframe`
// width:100%; 
// height:100%; 
// position:absolute; 
// `
            

export default function Contacto(){
const history=useHistory()
    const cargando=()=>{
        setTimeout(()=>{
            history.push('/inicio')
            window.location.reload(true);
        },3000)
        
    }
    return(
        <>
        <GifConten>
            <iframe title="carga" src="https://giphy.com/embed/qgQUggAC3Pfv687qPC" 
            frameBorder="0"
            >
            </iframe>
        <h1>Cargando...</h1>
        </GifConten>
        {cargando()}
        </>
    )
}