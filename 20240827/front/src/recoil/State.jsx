import { atom, selector } from 'recoil';
import axios from 'axios';

export const Auth = atom({
    key: "Auth",
    default: {
        currentUser: null,
        login: false
    }
})

export const AuthAction = selector({
    key: "Login",
    get: () => { },
    set: ({ set }, user) => {
        set(Auth, { login: user.login, currentUser: user.user });
    }
})

export const UserInfo = atom({
    key: "userInfo",
    default: {
        userID: "",
        userPW: ""
    }
})

export const SignIn = selector({
    key: "signin",
    get: async ({ get }) => {
        const { userID, userPW } = get(UserInfo);
        const response = await axios.post("http://localhost:4000/auth/login", { userID, userPW }, {
            withCredentials: true
        });
        console.log(response)

        if (response.status === 201 || response.status === 200) {
            return response.data
        }
    },
    set: ({ get, set }, newData) => {
        set(Auth, newData);
    }
})