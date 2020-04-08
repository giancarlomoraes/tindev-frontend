import axios from 'axios';

const api = axios.create({
    baseURL: 'https://trouble.surge.sh'
});

axios.defaults.baseURL = 'http://grubby-dinosaurs.surge.sh/';
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default api; 