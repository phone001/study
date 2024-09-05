import { SBody } from "../atoms/styleNodes/Styles";
import { Routes, Route } from 'react-router-dom'
import Form from './Form';
import Login from "../page/Login";
import SignUp from "../page/SignUp";
import Home from '../page/Home'
const Body = () => {
    return (
        <SBody>
            <Routes>
                <Route path="/" element={<Home />}> </Route>
                <Route path="/login" element={<Login />}> </Route>
                <Route path="/signup" element={<SignUp />}> </Route>
            </Routes>
        </SBody>
    )
}

export default Body;