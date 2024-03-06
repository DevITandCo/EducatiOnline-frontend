import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `https://educonline-backend-vkhphrdymq-uc.a.run.app/`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
});

export{
    axiosClient
};
