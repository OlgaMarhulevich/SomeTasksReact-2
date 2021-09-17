import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = '2334ffd9';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(`/?apikey=${key}&s=${title}`)
            .then(res => {
                console.log(res.data)
                return JSON.stringify(res.data)
            })
    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance.get(`/?apikey=${key}&t=${title}&type=${type}`)
            .then(res => {
                console.log(res.data)
                return JSON.stringify(res.data)
            })
    }
};


export default API;
