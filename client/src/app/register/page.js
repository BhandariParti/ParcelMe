'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {Input, Button} from "@nextui-org/react";
import Layout from '@/components/layout/page';
import styles from './styles.module.css';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const SignupForm = () => {
  const router = useRouter();

  const SignupSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Too Short!')
      .required('Required'),
    role: Yup.string()
      .required('Required'),
  });

  const registerUser = async (values) => {
    try {
      const res = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      if (res.status === 200) {
        toast.success('Registration successful!');
        router.push('/login');
      } else {
        toast.error(data.msg || 'Registration failed');
      }
    } catch (error) {
      toast.error('An error occurred: ' + error.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      email: '',
      password: '',
      role: '',
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      console.log("Form submitted with values:", values);
      registerUser(values);
    },
  });

  return (
    <Layout>
      <form className={styles.formfields} onSubmit={formik.handleSubmit}>
        <h1>Register</h1>

        <Input
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
          label="Phone Number"
          status={formik.touched.phoneNumber && formik.errors.phoneNumber ? 'error' : ''}
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber && (
          <div className={styles.error}>{formik.errors.phoneNumber}</div>
        )}

        <Input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          label="Email"
          status={formik.touched.email && formik.errors.email ? 'error' : ''}
        />
        {formik.touched.email && formik.errors.email && (
          <div className={styles.error}>{formik.errors.email}</div>
        )}

        <Input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          label="Password"
          status={formik.touched.password && formik.errors.password ? 'error' : ''}
        />
        {formik.touched.password && formik.errors.password && (
          <div className={styles.error}>{formik.errors.password}</div>
        )}

        <Input
          id="role"
          name="role"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.role}
          label="Role"
          status={formik.touched.role && formik.errors.role ? 'error' : ''}
        />
        {formik.touched.role && formik.errors.role && (
          <div className={styles.error}>{formik.errors.role}</div>
        )}

        <Button type="submit">Submit</Button>
      </form>
    </Layout>
  );
};

export default SignupForm;