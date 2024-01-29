import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `http://localhost:3000/v1/`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
});

export{
    axiosClient
};
