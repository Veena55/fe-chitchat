import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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


// Response interceptor
axios.interceptors.response.use(
    function (response) {
        // console.log('Response:', response);
        // toast.success("User created!!");
        return response;
    },
    function (error) {
        if (error.response) {
            if (error.response.status == 429) {
                toast.error(error.response.data);
            } else if (error.response.status == 409) {
                if (!error.response.data.message.is_email_verified) {
                    toast.error("Please Verify Your Mail");
                    window.location.href = '/login?exists=true';
                }
                toast.error(error.response.data.message.msg);
            } else if (error.response.data.errors.length > 0) {
                (error.response.data.errors).map((ele) => {
                    console.log(ele);
                    return toast.error(ele.msg);
                })
            }
        }
        return Promise.reject(error);
    }
);


export default axios;