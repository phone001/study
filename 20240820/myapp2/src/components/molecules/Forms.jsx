import Button from '../atoms/Button';
import Inputs from './Inputs';

const Forms = ({ data, children, onSubmit }) => {
    const InputView = () => {
        return data.map((e, index) => <Inputs key={index} htmlFor={e.htmlFor} id={e.id} type={e.type} name={e.name}>{e.children}</Inputs>)
    }

    return (
        <form onSubmit={onSubmit}>
            <InputView />
            <Button>{children}</Button>
        </form>
    )
}
export default Forms;

