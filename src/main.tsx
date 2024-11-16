import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/home";
import {Cpu} from "./pages/cpu";
import {AppLayout} from "./pages";
import './styles/main.scss';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AppLayout/>}>
                <Route index element={<Home/>}/>
                <Route path={"/cpu"} element={<Cpu/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)
