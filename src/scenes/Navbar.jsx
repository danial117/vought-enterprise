
import { Box, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../css/style.css";
import Vought from '../assets/Vought.jpg'
import Join from "./Join";
import { useDispatch, useSelector } from "react-redux";
 import {AccountCircle, ContactEmergency,Menu,CloseRounded} from '@mui/icons-material';
 import Contact from "./Contact";



const Navbar=()=> {
    const mobile_screens= useMediaQuery('(min-width:576px)')
    const user=useSelector((state)=>state.user);
    const fullName=user.firstname +' '+ user.lastname;
    const navigate=useNavigate();
    const[NavList,SetNavList]=useState(['Home','Info','Contact','Join','Classified']);
    const[Form,Set_Form]=useState(false);
    const[contactUs,SetcontactUs]=useState(false);
    const[Toggle,SetToggle]=useState(false);



  const ToggleMenu=()=>{
    return(
        <>
     <div className="toggle" style={{height:'100vh',width:'50%', backgroundColor:'rgba(0,0,0,1)',position:'fixed',zIndex:'30'}}>
      <ul >
          <CloseRounded onClick={toggleController} style={{color:'white',marginLeft:'auto',marginTop:'4%'}}/>
          <li onClick={HomePage_Expansion}>Home</li>
           <li onClick={Info_Expansion}>Info</li>
          <li onClick={Contact_Expansion}>Contact</li>
          <li onClick={Form_Expansion}>Join</li>
      </ul>

     </div>
        </>
    )
  }


      function toggleController(){
        const root=document.getElementById('root');
       
        if(Toggle === true){
            root.style.position='relative';
            if(Form){
                root.style.position='fixed';
            }
            if(contactUs){
                root.style.position='fixed';
            }
            
            SetToggle(false)
        }else {
            SetToggle(true)
           
            root.style.position='fixed';
           
        }
    }
   

    function Contact_Expansion(){
        
        const root=document.getElementById('root');
       
        if(contactUs !== true){
            SetToggle(false)
            SetcontactUs(true);
            root.style.position='fixed';
            
           
            
        }
         if(contactUs !== false){
            SetToggle(false)
            SetcontactUs(false);
            root.style.position='relative';
            if(Form ===true){
                root.style.position='fixed';
            }
        }
        
       
        

    }







   function Form_Expansion(){
    const rootElements=document.getElementById('root');
    if(Form !== true){
        SetToggle(false)
        Set_Form(true);       
        if (rootElements) {
            // Access the first element in the HTMLCollection (index 0)
            rootElements.style.position = 'fixed';
          }       
    }
       if(Form === true){
        SetToggle(false)
        Set_Form(false)
        SetcontactUs(false)
        
       }

       
    }

    function Info_Expansion(){
        const rootElements=document.getElementById('root');
        rootElements.style.position = 'relative';  
        navigate('/info');
        navigate(0)

    }



    function HomePage_Expansion(){
       navigate('/');
       navigate(0);
        const rootElements=document.getElementById('root');
        rootElements.style.position = 'relative';  
        if(Form === true){
            Set_Form(false);
            rootElements.style.position = 'relative';  
            navigate('/'); 
            navigate(0);                
        };               
        }
  
      return(
        <>
        <Box>
        
        <div className="nav" >
        <div className="nav-logo">
        <img  src={Vought}/>
        </div>
       
        
    <div className="nav-list">
        {mobile_screens ? <ul>
                <li  onClick={HomePage_Expansion}>{NavList[0]} </li><p></p>
                <li onClick={Info_Expansion}>{NavList[1]} </li><p></p>
                <li onClick={Contact_Expansion}>{NavList[2]}</li><p></p>
                <li  onClick={Form_Expansion} >{NavList[3]}</li><p></p>
                {user && <div className="nav-list-account"><AccountCircle/><p style={{display:'inline'}}>{fullName}</p></div>}
            
            </ul> :
            <>
           
             <ul style={{padding:'0%',margin:'0%'}}>
           {Toggle &&  <ToggleMenu />}  
                <li ><Menu onClick={toggleController}/></li>
                {user && <div className="nav-list-account"><AccountCircle/><p style={{display:'inline'}}>{fullName}</p></div>}
             </ul>
            </>

             }
           

            
            </div>
        </div>
        {Form && <Join/>}
        {contactUs && <Contact />}


        
       













      </Box>
      
     
     


      
      </>
      )
    
};

export default Navbar;
