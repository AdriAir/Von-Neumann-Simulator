import {ArithmeticLogicUnit} from "./alu";
import {Memory} from "./mp";
import {ControlUnit} from "./uc";

function Cpu() {

    return (
        <div>
            <ArithmeticLogicUnit/>
            <Memory/>
            <ControlUnit/>
        </div>
    )
}

export default Cpu
