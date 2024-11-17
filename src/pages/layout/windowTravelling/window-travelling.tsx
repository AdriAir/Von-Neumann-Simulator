import {useNavigate} from "react-router-dom";
import {APP_ROUTES} from "../../../utils";
import SingleTab from "./single-tab.tsx";
import "./window-travelling.scss"

type ButtonsMappingType = { text: string, onClick: Function, url: string }[]

function WindowTravelling() {

    const navigate = useNavigate()
    const buttonsMapping: ButtonsMappingType = [
        {
            text: "Central Processing Unit",
            onClick: () => navigate(APP_ROUTES.CPU),
            url: APP_ROUTES.CPU
        },
        {
            text: "Control Unit",
            onClick: () => navigate(APP_ROUTES.UC),
            url: APP_ROUTES.UC
        },
        {
            text: "Arithmetic Logic Unit",
            onClick: () => navigate(APP_ROUTES.ALU),
            url: APP_ROUTES.ALU
        },
        {
            text: "Memory",
            onClick: () => navigate(APP_ROUTES.MP),
            url: APP_ROUTES.MP
        }
    ]

    return <div className="window-travelling">
        {buttonsMapping.map((props, idx) => (
            <SingleTab key={idx} props={props}/>
        ))}
    </div>
}

export default WindowTravelling