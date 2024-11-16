import {createRoot} from 'react-dom/client';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Cpu} from "./pages/cpu";
import {AppLayout, ArithmeticLogicUnit, ControlUnit, Memory} from "./pages";
import {APP_ROUTES} from "./utils";
import "./styles/styles.scss";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
        <Routes>
            <Route path="/" element={<AppLayout/>}>
                <Route path={APP_ROUTES.CPU} element={<Cpu/>}/>
                <Route path={APP_ROUTES.ALU} element={<ArithmeticLogicUnit/>}/>
                <Route path={APP_ROUTES.UC} element={<ControlUnit/>}/>
                <Route path={APP_ROUTES.MP} element={<Memory/>}/>
            </Route>
            <Route path="/" element={<Navigate to={APP_ROUTES.CPU} replace/>}/>
        </Routes>
    </BrowserRouter>
);
