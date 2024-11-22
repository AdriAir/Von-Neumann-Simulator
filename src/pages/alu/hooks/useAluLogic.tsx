import {useState} from "react";
import {operations} from "../../../utils/operations.ts";

export function useAluLogic() {

    const [operandA, setOperandA] = useState<number>(0)
    const [operandB, setOperandB] = useState<number>(0)
    const [operation, setOperation] = useState<operations>(0)
    const [result, setResult] = useState<number>(0)
    const [overFlowFlag, setOverFlowFlag] = useState<number>(0)
    const [signFlag, setSignFlag] = useState<number>(0)
    const [zeroFlag, setZeroFlag] = useState<number>(0)
    const [errorFlag, setErrorFlag] = useState<number>(0)

    const MAX_VALUE = 127
    const MIN_VALUE = -128
    const VALUE_RANGE = 256
    const POSITIVE_VALUES = 128

    function circularOverflow(result: number): number {
        return ((result + POSITIVE_VALUES) % VALUE_RANGE) - POSITIVE_VALUES;
    }

    function checkFlags(baseResult: number): void {

        checkErrorFlag(baseResult)

        if (!errorFlag) {
            checkSignFLag(circularOverflow(baseResult))
            checkZeroFlag(circularOverflow(baseResult))
            checkOverflowFlag(baseResult)
        }


    }

    function checkZeroFlag(result: number): void {
        setZeroFlag(+(result == 0))
    }

    function checkSignFLag(result: number): void {
        setSignFlag(+(result < 0))
    }

    function checkOverflowFlag(result: number) {
        setOverFlowFlag(+(result < MIN_VALUE || result > MAX_VALUE))
    }

    function checkErrorFlag(result: number) {
        setErrorFlag(+(isNaN(result) || result === Infinity || result === -Infinity));
    }

    function makeOperation(): void {

        let result: number;

        switch (operation) {
            case operations.ADD:
                result = operandA + operandB
                break
            case operations.SUBTRACT:
                result = operandA - operandB
                break
            case operations.DIVIDE:
                result = operandA / operandB
                break
            case operations.MULTIPLY:
                result = operandA * operandB
                break
            case operations.COMPARE:
                result = +(operandA == operandB)
                break
            case operations.TRANSFER:
                result = operandA;
                break
            default:
                result = NaN
        }

        checkFlags(result)

        if (!errorFlag) {
            setResult(circularOverflow(result))
        } else {
            setResult(0)
        }
    }

    return {
        operandA,
        operandB,
        operation,
        result,
        overFlowFlag,
        signFlag,
        zeroFlag,
        errorFlag,
        makeOperation,
        setOperandA,
        setOperandB,
        setOperation,
    }
}