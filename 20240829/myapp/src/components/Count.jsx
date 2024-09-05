import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios';

const Count = () => {
    const [count, setCount] = useState()
    const { data, refetch } = useQuery({
        queryKey: ["count", count],
        queryFn: async () => {
            return await axios.get("http://localhost:4000/count")
        },
        refetchOnMount: true,
        refetchOnWindowFocus: true,
        enabled: false,
        retry: 10,
        select: ({ data }) => {
            console.log(data)
            return data + 1
        }
    })

    // post용도로 사용하고 처리 이후에 get으로 재요청하는 로직은 사용해도 된다.
    const mutation = useMutation({
        mutationFn: async (data) => {
            console.log(data)
            // mutation 객체안에 함수를 호출해서 nutation을 호출하면 
            // 매개변수로 전달한 내용을 할 수 있다.
            return await axios.post("http://localhost:4000/count", data)
        },
        onMutate(data) {
            console.log(data);
        },
        onError(error) {
            console.log(error);
        },
        onSettled() {
            // 맨 마지막에 호출되는 내용
            console.log("test")
        },
        onSuccess: (data) => {
            console.log(data)
        }
    });

    const handlerClick = () => {
        mutation.mutate({ incrementsCount: 2 })
    }
    useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <div>
            {/* <button onClick={refetch}>클릭</button> */}
            <button onClick={handlerClick}>클릭</button>
        </div>
    )
}

export default Count
