import React from "react";
import { Formik, Form} from "formik";
import * as Yup from 'yup'

import {Box} from '@mui/material'
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";



export default function form(){
    type InitialValues = {
        name: string,
        email: string,
        password: string
      }
     const formSchema = Yup.object().shape({
        name: Yup.string()
        .min(2, "Should be 2 or more letters")
        .max(50, 'Too Long!')
        .required("Required"), 
        email: Yup.string()
        .email('Invalid email')
        .required('Email required'),
      password: Yup.string()
        .min(6, "Password too short")
        .max(50, "Password too long")
        .required("Please enter your password")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,
          "Password must contain at least one letter one number and not less than six characters."
        )
     })

     const initialValues : InitialValues = {
        name: '',
        email: '',
        password: ''
     }
     const doSomething = (values : InitialValues) => {console.log(values)}
    return (
        <div>
            <Formik 
         initialValues={initialValues}
         validationSchema = {formSchema}
         onSubmit = {doSomething}
            >
             {({errors, touched, handleChange})=>{
                return (
                    <form>
              
                    <Box display='flex' 
                    flexDirection={'column'} 
                    maxWidth={400} 
                    alignItems="center" 
                    justifyContent={'center'}
                    margin= 'auto'
                    marginTop={5}
                    padding={3}
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #ccc'}
                    sx={{
                      ":hover":{
                      boxShadow:'10px 10px 20px #ccc'
                    }}}
                    >
                       <Typography
                        variant="h4"
                        padding={3}
                        textAlign='center'
                        >
                          Login
                          </Typography>
      
                       <div>
                       <TextField
                        margin="normal"
                        type={'text'}
                        variant="outlined"
                        label="Name"
                        name="name"
                       onChange={handleChange}
                         />
                      {errors.name && touched.name ? (
                        <div className='error-message'> {errors.name}</div>  
                      ): null}
                      </div>
                       
                       <div>
                       <TextField
                        margin="normal"
                         type={'email'} 
                         variant="outlined" 
                         label="Email"
                         name="email"
                         onChange={handleChange}
                         />
                         {errors.email && touched.email ? (
                            <div className='error-message'> {errors.email}</div>
                          ): null}
                       </div>
                       <div>
                       <TextField
                        margin="normal"
                         type={'password'}
                         variant="outlined" 
                         label="Password"
                         name="password"
                         onChange={handleChange}
                         />
                          {errors.password && touched.password ? (
                            <div className="error-message">{errors.password}</div>
                          ): null}
                        </div>
                       
                       <Button
                        sx={{marginTop:3}}
                        variant="contained">
                          LogIn
                        </Button>
                         </Box>
                   </form>
                )
             }}
            
            </Formik>
            </div>
    )
}

