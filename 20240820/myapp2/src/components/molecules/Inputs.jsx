import Input from '../atoms/Input';
import Label from '../atoms/Label';

const Inputs = ({ htmlFor, children, id, type, name }) => {
    console.log("test")
    return (
        <>
            <Label htmlFor={htmlFor}>{children}</Label>
            <Input id={id} type={type} name={name}></Input>
        </>
    )
}


export default Inputs;