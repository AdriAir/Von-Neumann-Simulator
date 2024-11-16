import {Outlet} from "react-router-dom";
import WindowTravelling from "./windowTravelling/window-travelling.tsx";

export default function AppLayout() {


    return <div>
        <h3>Von Neumann Simulator</h3>
        <WindowTravelling/>
        <Outlet/>
    </div>
}