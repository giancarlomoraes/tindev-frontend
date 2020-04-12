import axios from 'axios';

const api = axios.create({
    //baseURL: process.env.REACT_APP_API_URL
    baseURL: "https://tindev-backendserver.herokuapp.com/"
}); 

export default api; 