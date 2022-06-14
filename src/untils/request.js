import axios from 'axios';


const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
})

export const get = async (path, object = {}) => {
    const response = await request.get(path, object)

    return response.data
}

export default request;