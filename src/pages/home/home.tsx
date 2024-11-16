import {BaseButton} from "../../components"
import {Link} from "react-router-dom";

function Home() {

    return (
        <>
            Home
            <section>
                <BaseButton text={"CPU"}>
                    <Link to={}/>
                </BaseButton>
                <BaseButton text={"UC"}></BaseButton>
                <BaseButton text={"ALU"}></BaseButton>
                <BaseButton text={"Memory"}></BaseButton>
            </section>
        </>
    )
}

export default Home
