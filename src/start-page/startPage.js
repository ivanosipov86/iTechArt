import React from 'react'
import { NavLink } from 'react-router-dom'



export default function StartPage(){

return(
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
)

}

