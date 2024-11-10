// import axios from 'axios';


// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:8080',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': 'Basic ' + btoa('admin:admin14993') ,
//   }

  
// });

// export default axiosInstance;







import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
});

export const setAuthHeader = (username, password) => {
  const authHeader = 'Basic ' + btoa(`${username}:${password}`);
  axiosInstance.defaults.headers.common['Authorization'] = authHeader;
};

export default axiosInstance;