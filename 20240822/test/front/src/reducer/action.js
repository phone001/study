import axios from 'axios'
export const loginAction = (type, data) => {
    return async (dispatch, getState) => {
        const response = await axios.post("http://localhost:4000/auth/login", data)
        if (response.status === 200 || response.status === 201) {
            const { data: { userID } } = response;
            dispatch({ type, payload: { user: userID } })
        }
    }
}