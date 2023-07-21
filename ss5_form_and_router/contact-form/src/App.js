
import './App.css';
import React, { useState } from 'react';
import { ErrorMessage, Field, Formik } from 'formik';
import * as yup from "yup";
import {useNavigate} from "react-router";
import { useEffect } from 'react';

const REGEX = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

function App() {
  

  return(
    <>
    <Formik initialValues={{name: "", email: "", phone: "", message: "" }} 
    validate={yup.object({
      name: yup.string().required("name khong duoc de trong"),
      email: yup.string().required("email khong duoc de trong"),
      phone: yup.string().required("so dien thoai khong duoc de trong")
    })}
    onSubmit={(value) => {

    }}
    >
     <form>
      <div>
        <label htmlFor='name'>Name:</label>
        <Field id='name' type='text' name='name' />
        <ErrorMessage name='name' component='div' className='text-red' />

        <label htmlFor='email'>Email:</label>
        <Field id='email' type='text' name='email' />
        <ErrorMessage name='email' component='div' className='text-red' />

        <label htmlFor='phone'>Name:</label>
        <Field id='phone' type='text' name='phone' />
        <ErrorMessage name='phone' component='div' className='text-red' />

        <label htmlFor='name'>Name:</label>
        <Field id='name' type='text' name='name' />
  
      </div>
      <button type='submit'>Create</button>
      </form> 

    </Formik>
    </>
  )
}
export default App;



