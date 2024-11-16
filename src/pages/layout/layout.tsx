import {Outlet} from "react-router-dom";

export default function AppLayout() {


    return <div>
        <h3>Von Neumann Simulator</h3>
        <Outlet/>
    </div>
}