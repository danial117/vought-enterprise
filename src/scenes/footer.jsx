import { Facebook,Twitter,Google,YouTube } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";










const Footer=()=>{
    const mobile_screens= useMediaQuery('(min-width: 576px)');
    return(
        <>
        <div className="footer">
            <div className="logo">
               <h1> Connectivity </h1>
               <p>Support</p>
               <p>SIM Connectivity</p>
               <p>Vought News</p>
            </div>


            <div className="products"
            ><h1>Products </h1>
            <p>E-store</p>
            <p>online store</p>
            <p>ebay</p>
            <p>Amazon</p>
            </div>

            <div className="support">
                <h1>Support</h1>
                <p>Defense</p>
                <p>CIA</p>
                <p>Pentagon</p>
                <p>Neurogenisis</p>
            </div>


            <div className="Resources">
                <h1>Resources</h1>
                <p>Docs</p>
                <p>Wikipedia</p>
                <p>Blog</p>
                <p>Dawn news</p>
                <p>chat GPT</p>
               </div>


         { mobile_screens &&  <div className="social">            
                <h1>Social</h1>
                 <input type="text" ></input>
                 <div className="social-icons">
                 <Facebook/>
                 <Google/>
                 <Twitter/>
                 <YouTube/>
                 </div>        
            
            </div>
}
     
        </div>

         <div className="footer_info">
           <p >A product of Vought By <span> @DANIAL</span></p>
           </div>
</>

    )
}


export default Footer




