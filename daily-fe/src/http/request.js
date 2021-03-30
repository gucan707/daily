import axios from "axios";

// TODO 检查登录
function request(config) {
  const instance = axios.create({
    baseURL: "http://127.0.0.1:8080",
    timeout: 60000,
    withCredentials: true,
  });

  return instance(config);
}

export default request;
