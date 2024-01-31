import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `https://my-node-app-vkhphrdymq-uc.a.run.app/v1/`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
});

export{
    axiosClient
};
