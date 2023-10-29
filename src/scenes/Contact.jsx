
import {Mail,Phone} from '@mui/icons-material'
import { Formik } from 'formik';
import * as yup from 'yup';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';









const Contact=()=>{
    const[Access,SetAccess]=useState(false)
    
    const navigate=useNavigate();
    const token =useSelector((state)=>state.token);

    useEffect(()=>{
        if(token){
            SetAccess(true)
        };
        if(!token)
        {
           SetAccess(false);
        }
    },[])
    
    const Handle_Authorization=(OnSubmitProps)=>{

        if(OnSubmitProps){
            navigate(0)
        }
        
       
    }
    

    const mailSchema=yup.object().shape({
        name:yup.string().required('required'),
        email:yup.string().email('Invalid email').required('required'),
        message:yup.string().required('required'),
    });

    const Initialvalues={
         name:'',
         email:'',
         message:''
    }

   async function GMail(values,OnSubmitProps){
        const formdata=new FormData();

        for(let value in values){
            formdata.append(value,values[value])
        }

        const userMailed= await fetch('http://localhost:3001/mail',{
            method:'POST',
            headers:{'Content-Type':'application/json','Authorization':`Bearer ${token}`},
            body:JSON.stringify(values)
        }).then((response) => {
            if (!response.ok) {
              // Handle non-successful responses (e.g., show an error message)
              console.error('Failed to login:', response.status, response.statusText);
              throw new Error('Login failed');
            }
            return response.json();
          })
      
       



    }
    

    return(
        <>
       
        <div className='contacts-background'>
        
         <div className="contacts">

            <div className="contacts_content">
            <h1>Contact Us</h1>

           {Access ?<p>Send us a mail.</p>:<p>You need to be a member of Vought</p>  }
       
                    
          <Formik initialValues={Initialvalues} validationSchema={mailSchema} onSubmit={GMail}>
            {({values,handleSubmit,handleChange,resetForm}) =>

            <form onSubmit={handleSubmit}>
          
           
            <input name="name"  value={values.name} onChange={handleChange} type="text" placeholder="Name"></input>
            <input name="email" value={values.email} onChange={handleChange} type="text" placeholder="Email"></input>
            <input name="message" value={values.message}  onChange={handleChange}type="text" placeholder="Message"></input>
            <button onClick={Handle_Authorization} type='submit'>Submit</button> 

            </form>
}
          </Formik>
            </div>

            <div className="contacts-icon">

                <Mail/>
                <Phone>  </Phone> <span>+92 300 7634893</span>

            </div>
            
         </div>
     </div>
    


        </>  
    )






}


export default Contact
















































