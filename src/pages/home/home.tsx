import BaseButton from "../../components/ui/buttons/base-button.tsx";

function Home() {

    return (
        <>
            Home
            <section>
                <BaseButton text={"CPU"}></BaseButton>
                <BaseButton text={"UC"}></BaseButton>
                <BaseButton text={"ALU"}></BaseButton>
                <BaseButton text={"Memory"}></BaseButton>
            </section>
        </>
    )
}

export default Home
