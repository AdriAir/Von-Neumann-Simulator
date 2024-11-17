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

    const checkZeroFlag = () => {
        setZeroFlag(operandA === 0 || operandB === 0 ? 1 : 0)
    }

    const checkSign = (value: number) => {
        const flagValue = value >= 0 ? 0 : 1
        setSignFlag(flagValue)
    }

    const checkOverflow = (value: number) => {
        const difference = value < 0 ? value + 128 : value - 127
        checkSign(value)
        checkZeroFlag()
        if (value > 127 || value < -128) {
            setResult(difference)
            setOverFlowFlag(1)
        } else {
            setResult(value)
            setOverFlowFlag(0)
        }
    }

    const makeOperation = () => {

        switch (operation) {
            case operations.SUM:
                checkOverflow(operandA + operandB)
                break
            case operations.MINUS:
                checkOverflow(operandA - operandB)
                break
            case operations.DIVIDE:
                checkOverflow(operandA / operandB)
                break
            case operations.MULTI:
                checkOverflow(operandA * operandB)
                break
            case operations.COMPARE:
                const comparison = operandA === operandB ? 1 : 0
                setZeroFlag(operandA === 0 || operandB === 0 ? 1 : 0)
                setResult(comparison)
                break
            case operations.TRANSFER:
                setResult(operandA)
                break
        }

    }

    return {
        operandA,
        operandB,
        operation,
        result: Math.abs(result),
        overFlowFlag,
        signFlag,
        zeroFlag,
        makeOperation,
        setOperandA,
        setOperandB,
        setOperation,
    }
}