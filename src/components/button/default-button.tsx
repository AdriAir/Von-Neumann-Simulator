import "./default-button.scss";

function DefaultButton({text}: { text: string }) {
    return (
        <>
            <section className="button-wrapper">
                <div className="button">
                    {text}
                </div>
            </section>
        </>
    )
}

export default DefaultButton;