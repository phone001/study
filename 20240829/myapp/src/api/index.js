import axios from 'axios';
export const getTodoList = async () => {
    const { data } = await axios.get("http://localhost:4000/todo")
    return data;
}

export const addTodoList = async (todo) => {
    const { data } = await axios.post("http://localhost:4000/todo", { todo })
    return data;
}

export const signup = async (newData) => {
    const { data } = await axios.post("http://localhost:4000/signup", newData);
    return data;
}

export const getUsers = async () => {
    const { data } = await axios.get("http://localhost:4000/users");
    console.log(data)
    return data;
}