import ReactPlayer from 'react-player';
import { Button } from '@mui/material';
import '../css/style.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import info_1 from '../assets/info_1.png'
import info_2 from '../assets/info_2.png'
import info_3 from '../assets/info_3.jpg'
import Navbar from './Navbar';
import Footer from './footer';
import {setHome} from '../state'







 
const Info =() => {
      
  
    return(
        <>
      
        <div className='info_main'>
          <div className='CEO'></div>
          <div className='Vought'>
            <h1>What is Vought </h1>
            <p>Vought is an extraordinary and innovative superhero company that has set out on a mission to save the world. Founded with the vision of bringing extraordinary individuals with unique abilities together to combat global threats and ensure the safety and well-being of humanity, Vought has become a beacon of hope in a world filled with challenges.
            Vought's commitment to excellence and unwavering dedication to the greater good have made it a global leader in the superhero industry. The company's state-of-the-art facilities and cutting-edge research have allowed them to identify and nurture exceptional talents, harnessing their superhuman abilities for the betterment of society.
            </p>
          </div>
        </div>

        <div className='info_company'>
          <div className='info_learn'><h1>Learn More</h1><h4>Today's Heroes. Tomorrows Future</h4><p>Vought is one of the largest shareholders company in the world. We offer you an opportunity to server the world.</p><Button>Learn More</Button></div> 
          <div className='info_cards'><img src={info_1}></img><div><h1>Fredrick Vought</h1><Button>Read More</Button></div></div>
          <div className='info_cards'><img src={info_2}></img><div><h1>Special Peoples</h1><Button>Read More</Button></div></div> 
          <div className='info_cards'><img src={info_3}></img><div><h1>The Seven</h1><Button>Read More</Button></div></div> 
        </div>

        <div className='info_godolkin'><div className='godolkin_content'><h1>Godolkin University</h1><div className='extras'></div><h3>If you've ever wondered what it's like to study the extraordinary abilities of superheroes.We've partnered with Vought International, a renowned name in the world of superheroes, to bring you cutting-edge insights into the superhero industry. You'll have the opportunity to intern with the best in the business.</h3>
        <Button className='explore'>Explore Programs</Button> <p className='watch'>WATCH THE VIDEO</p></div></div>

        <Carousel showIndicators={false} showStatus={false}>
          <div className='info_youtube'><ReactPlayer width={'100%'} playing={true} url='https://www.youtube.com/watch?v=_2Wo6jiJ-Rg' /></div>
          <div className='info_youtube'><ReactPlayer width={'100%'}  url='https://www.youtube.com/watch?v=ejYQDFBmZMc' /></div>
          <div className='info_youtube'><ReactPlayer width={'100%'} url='https://www.youtube.com/watch?v=6smsQNjNXGg' /></div>
          <div className='info_youtube'><ReactPlayer width={'100%'} url='https://www.youtube.com/watch?v=dvEcx9SteqU' /></div>
        
         </Carousel>

        

       



        


        
        
      </>

    )
}


export default Info;