import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './scenes/Homepage';
import Info from './scenes/Info'



const App=() =>{
    return(
        <div className='app'>
    <BrowserRouter basename="/voughtproxy">

    <Routes>
        <Route path={'/'} element={<HomePage/> } />
        <Route path={'/info'} element={<Info/>}/>
    </Routes>
    
    
    
    
    
    
    
    
    
    </BrowserRouter>


    </div>








    )
}


export default App;














