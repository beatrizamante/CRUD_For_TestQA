import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VinylCase from '../pages/Case/VinylCase';
import Create from '../pages/Create/Create';
import Update from '../pages/Update/Update';
import Home from '../pages/Home/Home';

const Router: React.FC = () => (

    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/case' element={<VinylCase/>} />
            <Route path='/create' element={<Create/>} />
            <Route path='/update' element={<Update/>} />
            <Route path='/delete' element={<Create/>} />

        </Routes>
    </BrowserRouter>
);

export default Router;