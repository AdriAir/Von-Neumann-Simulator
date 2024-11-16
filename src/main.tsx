import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/home";
import {Cpu} from "./pages/cpu";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path={"/cpu"} element={<Cpu/>}/>
        </Routes>
    </BrowserRouter>
)
