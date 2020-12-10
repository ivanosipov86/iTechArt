import React from 'react';
import firebase from 'firebase';
import { Formik } from 'formik';
import * as yup from 'yup';
import styled, { keyframes } from 'styled-components';
import { slideInDown } from 'react-animations';
import {withRouter} from 'react-router-dom';
import startData from '../start-data/start-data'

const SlideInDown = styled.div`animation: 0.5s ${keyframes`${slideInDown}`}`;


function UserAuth({history}){





function signUser(email, password){
   firebase.auth().signInWithEmailAndPassword( email, password )
      .then(response => {
         localStorage.setItem('uid', response.user.uid);
         
         history.replace('/to-do-list');
      })
   .catch(error => console.log(error));
}


const validationSchema = yup.object().shape({
   email: yup
      .string()
      .email('Enter correct email')
      .required('Enter email'),
   password: yup
      .string()
      .required('Enter password')
})


return(
  <SlideInDown>
     <div className={"App"}>
      <Formik
      initialValues={{
            email: '',
            password: ''
      }}
      validateOnBlur
      onSubmit={(values) => { signUser(values.email, values.password) }}
      validationSchema={validationSchema}>
         {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
            <div className={"form"}>
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
                     type={"password"}
                     name={"password"}
                     placeholder={"Password"}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.password}/>
            <div className={"errorMessage"}>{ touched.password && errors.password && <SlideInDown><p className={"error"}>{ errors.password }</p></SlideInDown>}</div>
                  <button
                     className={"submitButton"}
                     disabled={!isValid || !dirty ? true : false}
                     onClick={handleSubmit}
                     type={"submit"}
                  >Submit
                  </button>
            </div>
         )}
   </Formik>
  </div>
  </SlideInDown>
)
}
export default withRouter(UserAuth)