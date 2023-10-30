import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './scenes/Navbar'




const App=() =>{
    return(
        <div className='app'>
    <BrowserRouter basename="/vought-internationals">

    <Routes>
        <Route path={'/'} element={<Navbar/> } />
       
    </Routes>
    
    
    
    
    
    
    
    
    
    </BrowserRouter>


    </div>








    )
}


export default App;














