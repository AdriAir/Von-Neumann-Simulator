import "./arithmetic-logic-unit.scss";
import {useAluLogic} from "./hooks";
import {operations} from "../../utils/operations.ts";

function ArithmeticLogicUnit() {
    const {
        operandA,
        operandB,
        result,
        setOperandA,
        setOperandB,
        setOperation,
        makeOperation,
        overFlowFlag,
        signFlag,
        zeroFlag,
        errorFlag,
    } = useAluLogic();

    const handleExecute = () => {
        makeOperation();
    };

    return (
        <>
            <section className="alu-wrapper">
                <img src="/src/assets/images/CPU/ALU.svg" alt="Arithmetical-Logical Unit" className="alu"/>
                <article className="actions">
                    <div className="inputs">
                        <label>
                            Operando A:
                            <input
                                type="number"
                                value={operandA}
                                onChange={(e) => setOperandA(Number(e.target.value))}
                            />
                        </label>
                        <label>
                            Operando B:
                            <input
                                type="number"
                                value={operandB}
                                onChange={(e) => setOperandB(Number(e.target.value))}
                            />
                        </label>
                    </div>
                    <div className="operation-select">
                        <label>
                            Operación:
                            <select
                                onChange={(e) =>
                                    setOperation(Number(e.target.value) as operations)
                                }
                            >
                                <option value={operations.ADD}>Suma</option>
                                <option value={operations.SUBTRACT}>Resta</option>
                                <option value={operations.MULTIPLY}>Multiplicación</option>
                                <option value={operations.DIVIDE}>División</option>
                                <option value={operations.COMPARE}>Comparar</option>
                                <option value={operations.TRANSFER}>Transferir</option>
                            </select>
                        </label>
                    </div>
                    <button className="execute-button" onClick={handleExecute}>
                        Ejecutar
                    </button>
                </article>
                <article className="results">
                    <h3>Resultados:</h3>
                    <p>Resultado: {result}</p>
                    <p>Overflow Flag: {overFlowFlag}</p>
                    <p>Sign Flag: {signFlag}</p>
                    <p>Zero Flag: {zeroFlag}</p>
                    <p>Error Flag: {errorFlag}</p>
                </article>
            </section>
        </>
    );
}

export default ArithmeticLogicUnit;
