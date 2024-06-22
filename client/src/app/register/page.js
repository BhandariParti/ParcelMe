'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {Input} from "@nextui-org/react";
import Layout from '@/components/layout/page'
import styles from './styles.module.css'
import {  toast } from 'react-toastify';

import { useRouter } from 'next/navigation';
const router = useRouter()
const SignupForm = () => {
    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        lastName: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        email: Yup.string().email('Invalid email').required('Required')
      });
      
      const registerUser =async(values)=>{
      const res= await fetch('http://localhost:5000/register',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(values)
       })
       const data =await res.json()
       if(res.status == 200) {
        router.push('/login')
      }
       toast(data.msg)
      }
  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      email: '',
      password: '',
      role: ''
    },
    validationSchema:SignupSchema,
    onSubmit: values => {
      registerUser(values)
    },
  });
  return (
    <Layout>
      <form className={styles.formfeild} onSubmit={formik.handleSubmit}>
      <label htmlFor="phoneNumber">phoneNumber</label>
      <Input 
        id="phoneNumber"
        name="phoneNumber"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.phoneNumber}
        label="phoneNumber" />
      
      <label htmlFor="email">Email</label>
      <Input
        id="email"
        name="email"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
        label="email"
      />
      {formik?.errors.email}
      <br/>
      <label htmlFor="password">Password</label>
      <Input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        label="password"
      />
      <label htmlFor="role">Role</label>
      <Input
        id="role"
        name="role"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.role}
        label="role"
      />
      <button type="submit">Submit</button>
    </form>
    </Layout>
    
  );
};

export default SignupForm