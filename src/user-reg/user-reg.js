import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { Formik } from 'formik'
import * as yup from 'yup'
import db from '../config/fbConfig'
import styled, { keyframes } from 'styled-components';
import { slideInDown } from 'react-animations';


const SlideInDown = styled.div`animation: 0.5s ${keyframes`${slideInDown}`}`;


function UserReg(props) {




function createUser( email, password, login){
   firebase.auth().createUserWithEmailAndPassword( email, password)
   .then(response =>  db.ref().child(response.user.uid).set({login: login}))
   .catch(error => console.log(error))
}




const validationSchema = yup.object().shape({
   login: yup
      .string()
      .required('Required field'),
   password: yup
      .string()
      .required('Required field'),
      // .matches(
      //    /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
      //    "Must contain 6 characters, one uppercase, one lowercase, one number, one special symbol"),
   confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .required('Required field'),
   email: yup
      .string()
      .email('Enter correct email')
      .required('Required field'),
   confirmEmail: yup
      .string()
      .email('Enter correct email')
      .oneOf([yup.ref('email')], 'Emails do not match')
      .required('Required field')
})

return(
      <Formik
         initialValues={{
               login: '',
               password: '',
               confirmPassword: '',
               email: '',
               confirmEmail: ''
         }}
         validateOnBlur
         onSubmit={(values) => { createUser(values.email, values.password, values.login)}}
         validationSchema={validationSchema}>
         {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
            <div className={"form"}>
                  <input
                     className={"inputForm"}
                     type={"text"}
                     name={"login"}
                     placeholder={"Login"}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.name}
                  />
            <div className={"errorMessage"}>{ touched.login && errors.login && <SlideInDown><p className={"error"}>{ errors.login }</p></SlideInDown>}</div>
                  <input
                     className={"inputForm"}
                     type={"email"}
                     name={"email"}
                     placeholder={"Email"}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.email}
                  />
            <div className={"errorMessage"}>{ touched.email && errors.email && <SlideInDown><p className={"error"}>{ errors.email }</p></SlideInDown>}</div>
                  <input
                     className={"inputForm"}
                     type={"email"}
                     name={"confirmEmail"}
                     placeholder={"Confirm Email"}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.confirmEmail}
                  />
            <div className={"errorMessage"}>{ touched.confirmEmail && errors.confirmEmail && <SlideInDown><p className={"error"}>{ errors.confirmEmail }</p></SlideInDown>}</div>
                  <input
                     className={"inputForm"}
                     type={"password"}
                     name={"password"}
                     placeholder={"Password"}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.password}
                  />
            <div className={"errorMessageRegExp"}>{ touched.password && errors.password && <SlideInDown><p className={"error"}>{ errors.password }</p></SlideInDown>}</div>
                  <input
                     className={"inputForm"}
                     type={"password"}
                     name={"confirmPassword"}
                     placeholder={"Confirm Password"}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.confirmPassword}
                  />
            <div className={"errorMessage"}>{ touched.confirmPassword && errors.confirmPassword && <SlideInDown><p className={"error"}>{ errors.confirmPassword }</p></SlideInDown>}</div>
                  <button
                     className={"submitButton"}
                     disabled={!isValid || !dirty ? true : false}
                     onClick={handleSubmit}
                     type={"submit"}
               >Send</button>
            </div>
         )}
      </Formik>
)
   }

export default UserReg
