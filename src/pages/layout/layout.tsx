import {Outlet} from "react-router-dom";
import WindowTravelling from "./windowTravelling/window-travelling.tsx";
import "./layout.scss"

function AppLayout() {


    return <div>
        <div className="layout">
            <h3>Von Neumann Simulator</h3>
        </div>
        <WindowTravelling/>
        <Outlet/>
    </div>
}

export default AppLayout