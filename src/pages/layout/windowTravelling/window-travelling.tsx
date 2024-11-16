import {useNavigate} from "react-router-dom";
import {APP_ROUTES} from "../../../utils";
import SingleTab from "./singleTab.tsx";

type ButtonsMappingType = { text: string, onClick: Function }[]

function WindowTravelling() {

    const navigate = useNavigate()
    const buttonsMapping: ButtonsMappingType = [
        {
            text: "Home",
            onClick: () => navigate("/")
        },
        {
            text: "UC",
            onClick: () => navigate(APP_ROUTES.UC)
        },
        {
            text: "ALU",
            onClick: () => navigate(APP_ROUTES.ALU)
        },
        {
            text: "Memory",
            onClick: () => navigate(APP_ROUTES.MP)
        }
    ]

    return <div>
        {buttonsMapping.map((props, idx) => (
            <SingleTab key={idx} props={props}/>
        ))}
    </div>
}

export default WindowTravelling