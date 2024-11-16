import "./default-button.scss";

function DefaultButton({text}: { text: string }) {
    return (
        <>
            <section className="button-wrapper">
                {text}
            </section>
        </>
    )
}

export default DefaultButton;