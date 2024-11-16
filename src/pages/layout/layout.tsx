import {Outlet} from "react-router-dom";
import WindowTravelling from "./windowTravelling/window-travelling.tsx";
import DefaultButton from "../../components/buttons/default-button.tsx";

function AppLayout() {


    return <div>
        <h3>Von Neumann Simulator</h3>
        <DefaultButton text={'holaaa'}></DefaultButton>
        <WindowTravelling/>
        <Outlet/>
    </div>
}

export default AppLayout