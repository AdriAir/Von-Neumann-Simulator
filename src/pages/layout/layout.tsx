import {Outlet} from "react-router-dom";
import WindowTravelling from "./windowTravelling/window-travelling.tsx";

function AppLayout() {


    return <div>
        <div className="layout">
            <h3 style={{margin: 0}}>Von Neumann Simulator</h3>
        </div>
        <WindowTravelling/>
        <Outlet/>
    </div>
}

export default AppLayout