import "./arithmetic-logic-unit.scss";

function ArithmeticLogicUnit() {

    return (
        <>
            <section className="alu">
                <article className="inputs-wrapper">
                    {/*    INPUTS*/}
                </article>
                <article className="alu-wrapper">
                    {/*<img src={"src/assets/icons/alu.svg"} alt={"ALU Image"} className="alu-icon"></img>*/}
                </article>
                <article className="flags-wrapper">
                    <article className="flags-grid">
                        <div className="overflow-flag-header">OF</div>
                        <div className="overflow-flag-value">0</div>
                        <div className="sign-flag-header">SF</div>
                        <div className="sign-flag-value">0</div>
                        <div className="zero-flag-header">ZF</div>
                        <div className="zero-flag-value">0</div>
                    </article>
                </article>
                <article className="output-wrapper">
                </article>
                <section className="cu">
                    <article className="cu-wrapper">
                    </article>
                </section>
            </section>
        </>
    )
}

export default ArithmeticLogicUnit