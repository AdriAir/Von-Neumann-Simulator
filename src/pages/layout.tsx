import {Outlet, useNavigate} from "react-router-dom";
import {BaseButton} from "../components";
import {APP_ROUTES} from "../utils";

type ButtonsMappingType = { text: string, onClick: Function }[]

export default function AppLayout() {

    const navigate = useNavigate()
    const buttonsMapping: ButtonsMappingType = [
        {
            text: "CPU",
            onClick: () => navigate(APP_ROUTES.CPU)
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
        Layout
        <section>
            {buttonsMapping.map((props) => (
                <BaseButton props={props}/>
            ))}
        </section>
        <Outlet/>
    </div>
}