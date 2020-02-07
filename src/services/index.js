import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://rocky-caverns-36312.herokuapp.com/api"
});
export const api = {
    get(endpoint) {
        return axiosInstance.get(endpoint);
    },
    post(endpoint, body) {
      return axiosInstance.post(endpoint, body);
    },
    put(endpoint, body) {
      return axiosInstance.put(endpoint, body);
    },
    delete(endpoint) {
      return axiosInstance.delete(endpoint);
    },
}