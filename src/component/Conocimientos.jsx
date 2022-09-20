import React from "react";
import styled from 'styled-components'
import imgCss from '../resource/img/css-3.png'
import imgReact from '../resource/img/REACT.png'
import imgRedux from '../resource/img/Redux.png'
import imgHtml from '../resource/img/html-5.png'
import imgJs from '../resource/img/IMGJS.png'
import imgExpres from '../resource/img/express.png'
import imgPostgresSql from '../resource/img/posgres.png'
import imgNode from '../resource/img/node.png'
import imgGithub from '../resource/img/git.png'

const ContenStyled=styled.div`
margin: 10px 10%;
img{
    margin: 7.5%;
    width: 15%;
    height: 15%;
}
`

export default function Conocimientos(){
    return(
        <>
        <h1>Skils</h1>
        <ContenStyled>
            <img src={imgCss} alt='img'/>
            <img src={imgHtml} alt='img'/>
            <img src={imgReact} alt='img'/>
            <img src={imgExpres} alt='img'/>
            <img src={imgJs} alt='img'/>
            <img src={imgRedux} alt='img'/>
            <img src={imgPostgresSql} alt='img'/>
            <img src={imgNode} alt='img'/>
            <img src={imgGithub} alt='img'/>

        </ContenStyled>
        </>
        
    )
}