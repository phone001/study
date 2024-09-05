// action create 함수
import axios from 'axios';
export const getUserAction = (type) => {
    return async (dispatch, getState) => {
        const { data } = await axios.get("http://localhost:3001");
        // const data = "";
        dispatch({ type: data, payload: data })
    }
}
