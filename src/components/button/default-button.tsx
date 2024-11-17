import "./default-button.scss";

function DefaultButton({text, className}: { text: string, className?: string }) {
    return (
        <>
            <section className={`button-wrapper ${className}`}>
                <div className="button">
                    {text}
                </div>
            </section>
        </>
    )
}

export default DefaultButton;