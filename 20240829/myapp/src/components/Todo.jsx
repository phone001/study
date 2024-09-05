import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { getTodoList, addTodoList } from '../api/index'

function Todo() {
    const { data, isLoading, isError, status, refetch } = useQuery({
        queryKey: ["todo"],
        queryFn: getTodoList,
        retry: 0,
        suspense: true,
    })
    const { mutate } = useMutation({
        mutationFn: addTodoList,
        onMutate() {
            console.log("test")
        },
        onError(error) {
            console.error(error);
        },
        onSuccess(data) {
            console.log(data)
            refetch();
        }
    })

    useEffect(() => {
        console.log(status)
    }, [status])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const { name } = e.target;
        const newTodo = {
            id: data.length + 1,
            name: name.value
        }
        mutate(newTodo);
    }
    // if (isLoading) return <>loading</>
    // if (isError) return <>error</>

    // key값을 줘야하는 이유는
    // 리액트가 리랜더링을 감지할 때 key판단을 해서 그리기 때문에 key값이 없으면 
    // 자식으로 컴포넌트를 동적으로 생성하는 경우에 리렌더링이 되지 않는 문제가 발생할 수 있다.
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>이름</label>
                <input type="text" name="name" />
                <button>추가</button>
            </form>
            {data.map((el, index) => <div key={index}>{el.id} {el.name}</div>)}
        </div>
    )
}

export default Todo
