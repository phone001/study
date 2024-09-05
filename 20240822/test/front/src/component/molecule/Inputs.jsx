import Input from "../atoms/nodes/Input"
import Label from "../atoms/nodes/Label"
import { SInputs } from "../atoms/styleNodes/Styles"

const Inputs = ({ data: { name, type, children } }) => {
    return (
        <SInputs>
            <Label>{children}</Label>
            <Input name={name} type={type}></Input>
        </SInputs>
    )
}
export default Inputs