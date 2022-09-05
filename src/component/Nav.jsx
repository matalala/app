import React from "react";
import styled, { ThemeProvider } from "styled-components";
import btninicio from '../resource/img/btninicio.png'
import btnConocimentos from '../resource/img/btnConocimentos.png'
import btnProyectos from '../resource/img/btnProyectos.png'
import btnContacto from '../resource/img/btnContacto.png'
import btninicioHover from '../resource/img/btninicioHover.png'
import btnConocimentosHover from '../resource/img/btnConocimentosHover.png'
import btnProyectosHover from '../resource/img/btnProyectosHover.png'
import btnContactoHover from '../resource/img/btnContactoHover.png'
import { useHistory } from "react-router-dom";
const NavBar=styled.div`

width: 100%;
max-width: fit-content;
max-width: 100px;
height: 100%;
top: 12px;
left: 2px;
background: rgba(38, 48, 34, 0.81);
border-radius: 20px;
max-height: 97%;
    margin: 1% 0% 1% 0.5%;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    

`
const Btninicio=styled.button`
width: 100%;
height: 100%;
max-width: 75px;
max-height: 73px;
margin: 10px;
background-size: cover;
  background-position: center;
  background-color: rgba(255, 255, 255, 0);
  border: none;
background-image: url(${props => props.theme.img});
&:hover{
    background-image: url(${props => props.theme.imgHover});
}
&:focus{
    background-image: url(${props => props.theme.imgHover});

}

`


export default function Nav(){
    const history=useHistory()
    let [cargando,setCargando]=React.useState(false)
    
    React.useEffect(()=>{
        let url=window.location.pathname
    url==='/'?setCargando(true):setCargando(false)
   },[cargando])
    const BtnClik=(ev)=>{
       history.push('/'+ev.target.name)

    }
    return(
        !cargando?
        <NavBar>
            <ThemeProvider  theme={{img:btninicio,
                                    imgHover:btninicioHover}}>
           
           <Btninicio  onClick={BtnClik} name='inicio'/>
           
            </ThemeProvider>
            <ThemeProvider  theme={{img:btnProyectos,
                                    imgHover:btnProyectosHover}}>
           <Btninicio  onClick={BtnClik} name='proyectos'/>
            </ThemeProvider>
            <ThemeProvider  theme={{img:btnConocimentos,
                                    imgHover:btnConocimentosHover}}>
           <Btninicio  onClick={BtnClik} name='conocimientos'/>
            </ThemeProvider>
            <ThemeProvider  theme={{img:btnContacto,
                                    imgHover:btnContactoHover}}>
           <Btninicio  onClick={BtnClik} name='contacto'/>
            </ThemeProvider>
          
        </NavBar>:<></>
    )
}