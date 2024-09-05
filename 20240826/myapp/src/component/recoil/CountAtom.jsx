import React from 'react'
import { atom, selector } from 'recoil';

export const CountAtom = atom(
    {
        key: "count",
        default: {
            num: 0,
            name: "pageCount",
        }
    }
)

// 스토어의 값으로 연산을 통해 상태변수를 생성
export const pagenation = selector({
    key: "pagenation",
    get: ({ get }) => {
        // 다른 스토어의 값을 참조할 수 있는 메소드
        const { num } = get(CountAtom)
        return `page${num} 번째야`;
        // return 값이 상태변수로 전달
        // 게시글의 내용을 요청하느 ㄴ연산을 한다고 가정하면 
        // 게시글의 내용이 전역상태로 관리될 수 있다.
    },
    set: ({ set, get }, newState) => {
        // newState = {num:1, name:"pageCount"}
        const { num, name } = get(CountAtom)
        //set(CountAtom, newState)
        // 스토어의 값을 변경
        // {num:num+1,name} 전달한 값으로 스토어의 상태가 변경된다.
        set(CountAtom, { num: num + 1, name })
    }
})

export const Login = atom(
    {
        key: "Login",
        default: {
            uid: "",
            upw: ""
        }
    }
)
export const LoginCheck = selector({
    key: "LoginCheck",
    get: async ({ get }) => {

        const data = await new Promise((res, rej) => {
            const { uid, upw } = get(Login);
            const user = { uid: "123", upw: "456" }
            if (user.uid === uid && user.upw === upw) {
                setTimeout(() => {
                    res("로그인 성공");
                }, 3000)
            } else {
                rej("로그인 실패");
            }

        });
        return data;
    }
})