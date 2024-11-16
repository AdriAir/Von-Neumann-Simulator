import {Outlet} from "react-router-dom";
import WindowTravelling from "./windowTravelling/window-travelling.tsx";
import "./layout.scss"

function AppLayout() {


    return (
        <section className="layout-wrapper">
            <article className="header">
                <div className="layout">
                    <h3>Von Neumann Simulator</h3>
                </div>
                <WindowTravelling/>
            </article>
            <article className="body">
                <Outlet/>
            </article>
        </section>)
}

export default AppLayout