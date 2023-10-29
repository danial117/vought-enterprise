import * as yup from 'yup';
import { Formik, } from 'formik';
import { TextField, Button, Typography } from '@mui/material';
import '../css/style.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {setUser,setToken} from "../state";
import { useState } from 'react';







const Join=()=>{
      
       const dispatch=useDispatch();
      
      

       const[Sign_up,set_Sign_up]=useState('false');
       const[Login,set_login]=useState('true');
       const[responseError,set_resposneError]=useState(false);
       const islogin = Login === 'true';
       const isSign_up = Sign_up === 'true';





      

      const Register=async (values,OnSubmitProps)=>{
        
        const formData = new FormData();
        for(let value in values){
            formData.append(value,values[value])

        };
       
     const userSigned =await  fetch('http://localhost:3001/register',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(values)
        }).then((response) => {
          if(response.status === 404){
          
            set_resposneError('Unique email required');
            console.error('Email matched');
          }
          if (!response.ok) {
           
            // Handle non-successful responses (e.g., show an error message)
            console.error('Failed to sign up:', response.status, response.statusText,response.error);
            throw new Error('Sign up failed');
          }
          return response.json();
        })
        .then((userSignedResponse) => {
        
          // You can log the response for debugging purposes
          dispatch(setUser({user:userSignedResponse.user}));
          dispatch(setToken({token:userSignedResponse.token}));
        })
        .catch((error) => {
          console.error('Error:', error);
        });

       
        
          
       
      }


      const user_logged=async(values,OnSubmitProps)=>{
       
       
        const user_login=await fetch('http://localhost:3001/login',{
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify(values)
        }).then((response) => {
          if (!response.ok) {
            // Handle non-successful responses (e.g., show an error message)
            console.error('Failed to login:', response.status, response.statusText);
            throw new Error('Login failed');
          }
          return response.json();
        })
        .then((userSignedResponse) => {
        
        
          dispatch(setUser({user:userSignedResponse.user}));
          dispatch(setToken({token:userSignedResponse.token}));
         
        })
        .catch((error) => {
          console.error('Error:', error);
        });
        
       
           

      }








     const OnSubmit=(values,OnSubmitProps) =>{
      if (islogin) user_logged(values,OnSubmitProps);
      if(isSign_up) Register(values,OnSubmitProps);
     }


     const Sign_up_Schema=yup.object().shape({
      firstname:yup.string().required("required"),
      lastname:yup.string().required("required"),
      email:yup.string().email("Invalid Email").required("required"),
      password:yup.string().required("required"),

    });

    const Login_Schema=yup.object().shape({
      email:yup.string().email("Invalid Email").required("required"),
      password:yup.string().required("required"),

    })


      const initial_Values_register={
        firstname:"",
        lastname:"",
        email:"",
        password:"",
      };

      const initial_Values_login={
        email:"",
        password:""
      }






    return(
      <>

        <Formik
        onSubmit={OnSubmit}
        validationSchema={Sign_up_Schema}
        initialValues={ initial_Values_register}
        >
        {({values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            resetForm,


            })=>
        <form className='form' onSubmit={handleSubmit}>
         
          <div className='form_area_1'>
             <div className='form_inputs' style={{display:'flex',flexDirection:'column'}}>
              {islogin ?  <h1>Login</h1> : <h1>Sign Up</h1>} 
                <p>Join and be one with the Vought. WE offer more than the world can give.</p>

         {isSign_up && 
         <>
            <TextField
            label='First Name:'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstname}
            name='firstname'
            error={ Boolean(touched.firstname) &&  Boolean(errors.firstname)   }
           

             />  

            <TextField
             label='Last Name:'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.lastname}
             name='lastname'
             error={ Boolean(touched.lastname) &&  Boolean(errors.lastname)   }
             />
         </>
          }
            
            <TextField
             label='email'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             name='email'
             error={ Boolean(touched.email) &&  Boolean(errors.email)   }
             />
           
            <TextField
             label='Password:'
             type='password'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
             name='password'
             error={ Boolean(touched.password) &&  Boolean(errors.password)   }
             />

             {responseError && <p className='error'>{responseError}</p>}
           

           <Typography >
            <Button onClick={resetForm}  type='submit'>Submit</Button>
            </Typography>

            {
              islogin ?
              <p className='change' onClick={()=>{set_login('false'); set_Sign_up('true')}}>Create an account </p>
            : <p className='change' onClick={()=>{set_login('true'); set_Sign_up('false')}}>Do you already have an account</p>

              }
            </div>
             </div>



             <div className='form_area_2' >
           
           
           </div>

           
           
           
       </form>
            
}






        </Formik>















        </>
    )
}

export default Join;