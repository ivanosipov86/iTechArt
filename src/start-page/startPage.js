import React from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components';
import { slideInDown } from 'react-animations';

const SlideInDown = styled.div`animation: 0.5s ${keyframes`${slideInDown}`}`;



export default function StartPage(){

return(
<SlideInDown>
<div className={"App"}>
<div className={"form"}>
      <NavLink to="/user-auth">
         <button
            className={"submitButton signIn"}
            >Sign in
         </button>
      </NavLink>
      <div className={"errorMessage"}><p className={"error"}>Enter your account</p></div>
      <NavLink to="/user-reg">
         <button
            className={"submitButton register"}
            >Register
         </button>
      </NavLink>
      <div><p className={"error"}>Create new account</p></div>
   </div>
</div>
</SlideInDown>
)

}

