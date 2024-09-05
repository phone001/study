import { SForm, SButton } from "../atoms/styleNodes/Styles"
import React from 'react';
import Inputs from './Inputs';
const Form = ({ data, children, onSubmit }) => {

    const InputsView = () => {
        return data.map((e, index) => <Inputs key={index} data={e}></Inputs>)
    }
    return (
        <SForm onSubmit={onSubmit}>
            <InputsView></InputsView>
            <SButton>{children}</SButton>
        </SForm>
    )
}
export default Form;