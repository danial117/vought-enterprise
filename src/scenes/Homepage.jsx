import { Button } from '@mui/material';
import Footer from './footer';
import '../css/style.css'
import Navbar from "./Navbar";
import Home_Heading from"../assets/Main_Page_2.jpg"
import {setHome} from '../state'
import { useSelector } from 'react-redux';


const HomePage=()=>{
    const home=useSelector((state)=>state.home)
   
   


 







    return(
        

        
        
        
       
        
        home && (
            <>
           
           
        <div className="main-heading">
           <div className='heading-info'>
           <h1 >
            We Welcome All To Vought
            </h1>

            <p>Vought is a home that you need.The World makes men. We make them heroes</p>
        
            <Button sx={{padding:'5px',
             background:'red',color:'white',transition:'0.4s ease',
             '&:hover':{border:'none',background:'white',padding:'6px',fontSize:'18px',  color:'red',transition:'0.5s ease'}
               
            }}>Register Now</Button>
            
             </div>
            <img src={Home_Heading}/>
        </div>

        <div className='heading-2'>
                <div>
                <p><span>Vought</span> is one of the largest shareholder company in the world. Vought is a superhero company. We are destined to save the world and we offer you a purpose.
                <Button sx={{padding:'5px',borderRadius:'0',
             background:'red',color:'white',transition:'0.4s ease',opacity:'0.9',m:'1% 0 0 0',
             '&:hover':{border:'none',background:'white',padding:'6px', fontWeight:'bold', color:'red',transition:'0.5s ease'}
                }}>We have a Future for you</Button></p>
               </div>
        </div>


        
        </>
        )
       
    
        
           





    )
   
};

export default HomePage