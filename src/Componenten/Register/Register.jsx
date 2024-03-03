import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'
import { useFormik } from 'formik';
import {object,ref ,string }from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Register() {
let [loader,setLoader]=useState(false);
let [msg,setMsg]=useState('');
let navigate=useNavigate();
 async function getRegister(values){
  try{
    let { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values)
    setLoader(true);
   console.log(data);
if(data.message==='success'){
  navigate('/');
  setMsg('');
  setLoader(false);
}

  }catch(error){
   
    setMsg(error.response.data.message);

  }
  
  }
  const validationSchema=object({
    name:string().required("The name is required").min("2","to short min is 2 ch").max("5","to long max is 5 ch"),
    email:string().required("The Email is required").email("Email is not valid"),
    password:string().required("The Password is required").matches(/([A-Z]|[a-z])[0-9]{2,8}$/,"not right"),
    rePassword:string().required("The rePassword is required").oneOf([ref("password")],"shoud same with Password"),
    phone:string().required("The Phone is required").matches(/[ ()]?([- ()]?\d[- ()]?){11}/,"not right")
    
     });
  const formik=useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      rePassword:'',
      phone:''
    },validationSchema,
    onSubmit:getRegister
    
  });


  
  return (
    <>
    <h2 className='text-center my-3'>Register Now</h2>
    <form  className='w-75 mx-auto my-4 ' onSubmit={formik.handleSubmit}>
    {msg?<p className='alert alert-danger '>{msg}</p>:''}
    <label htmlFor='name' >Name</label>
    <input type="text" className='form-control mb-3 ' id='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
      {formik.errors.name&& formik.touched.name?<p className='alert alert-danger'>{formik.errors.name}</p>:''}
    <label htmlFor='email' >Email</label>
    <input type="email" className='form-control mb-3' id='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
    {formik.errors.email&&formik.touched.email?<p className='alert alert-danger'>{formik.errors.email}</p>:''}
    <label htmlFor='password' >Password</label>
    <input type="password" className='form-control mb-3' id='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
    {formik.errors.password&&formik.touched.password?<p className='alert alert-danger'>{formik.errors.password}</p>:''}
    <label htmlFor='rePassword' >rePassword</label>
    <input type="password" className='form-control mb-3' id='rePassword' value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
    {formik.errors.rePassword&&formik.touched.rePassword?<p className='alert alert-danger'>{formik.errors.rePassword}</p>:''}
  <label htmlFor='phone' >Phone</label>
    <input type="tel" className='form-control mb-3' id='phone' value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}></input> 
    {formik.errors.phone&&formik.touched.phone?<p className='alert alert-danger'>{formik.errors.phone}</p>:''}

    <Button  disabled={!(formik.isValid&&formik.dirty)} className="btn  green-color ms-auto d-block " type='submit'>Register</Button>
    
    </form>
    </>
  )
}
