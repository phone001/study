import axios from 'axios';

export const getPages = async ({ pageParam }) => {
    const { data } = await axios.get(`http://localhost:4000/page/${pageParam}`)
    return data;
}