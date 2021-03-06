import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { PowerBtn } from "../components/AllSvgs"

const Power = styled.button`
position:fixed;
top: 1rem;
left: 50%;
right:50%;
background-color: #FCF6F4;
padding: 0%, 3rem;
border-radius:50%;
border: 1px solid #000;
width: 2.5rem;
height:2.5rem;

display:flex;
justify-content:center;
aligh-items: center;
z-index: 3;

cursor:pointer;

&:hover{
    background-color: rgba(0,255,0,0.4);
    box-shadow: 0 0 8px 6px rgba(0,255,0,0.2);
}

&>*:first-child{
    text-decoration:none;
    color:inherit;
}
`

const PowerButton = (props) =>{
    return (
        <Power>
        <NavLink to="/">
        <PowerBtn height={30} width={30} fill='currentColor' />
        </NavLink>
        </Power>
    )
}

export default PowerButton