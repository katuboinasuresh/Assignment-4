import React from 'react';
import Firstview from './Firstview';
import Postview from './Lastpage';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Createpost from './Createpost';

function App() {
    return (
        <BrowserRouter>
            <div className='wrapper'>
                <Routes>
                    <Route path="*" element={<Firstview />} />
                    <Route path='/Lodingpage' element={<Postview />} />
                    <Route path='/Createpost' element={<Createpost />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App; 