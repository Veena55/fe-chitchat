import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GetPath } from "../routes/Path";

axios.defaults.baseURL = "http://localhost:7000"


// Request interceptor
axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        // console.log(token);
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

function is_made_exception() {
    const list = [GetPath('login')];
    return list.some(value => location.href.includes(value));
}


// Response interceptor
axios.interceptors.response.use(
    function (response) {
        console.log('Response:', response);
        // toast.success("User created!!");
        return response;
    },
    function (error) {
        console.log(error);
        if (error.response) {
            if (error.response.status === 401) {
                if (!is_made_exception()) {
                    toast.error('Please login to continue with the application!');
                    location.replace(GetPath('login'));
                }
            } else if (error.response.status == 429) {
                toast.error(error.response.data);
            } else if (error.response.data.errors && error.response.data.errors.length > 0) {
                (error.response.data.errors).map((ele) => {
                    console.log(ele);
                    return toast.error(ele.msg);
                })
            } else {
                toast.error(error.response.data.message);
            }
        }
        return Promise.reject(error);
    }
);