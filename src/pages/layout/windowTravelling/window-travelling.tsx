import {useNavigate} from "react-router-dom";
import {APP_ROUTES} from "../../../utils";
import {BaseButton} from "../../../components";

type ButtonsMappingType = { text: string, onClick: Function }[]

export default function WindowTravelling() {

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
            <BaseButton key={idx} props={props}/>
        ))}
    </div>
}