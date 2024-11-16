import {BaseButton} from "../../components"
import {useNavigate} from "react-router-dom";
import {APP_ROUTES} from "../../utils";

function Home() {

    const navigate = useNavigate()

    return (
        <>
            Home
            <section>
                <BaseButton
                    text={"CPU"}
                    onClick={() => navigate(APP_ROUTES.CPU)}
                />
                <BaseButton
                    text={"UC"}
                    onClick={() => navigate(APP_ROUTES.UC)}
                />
                <BaseButton
                    text={"ALU"}
                    onClick={() => navigate(APP_ROUTES.ALU)}
                />
                <BaseButton
                    text={"Memory"}
                    onClick={() => navigate(APP_ROUTES.MP)}
                />

            </section>
        </>
    )
}

export default Home
