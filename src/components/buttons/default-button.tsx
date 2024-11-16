import "./button.scss";

function DefaultButton({text}: { text: string }) {
    return (
        <>
            <section className="button-rapper">
                {text}
            </section>
        </>
    )
}

export default DefaultButton;