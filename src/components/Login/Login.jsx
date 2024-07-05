import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import assets from '../../assets/assets';
import { FcGoogle } from 'react-icons/fc';
import './Login.css';
import { FaEye } from 'react-icons/fa';
import { GoEyeClosed } from 'react-icons/go';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from '../../utils/axiosConfig';
import { toast } from 'react-toastify';

const Login = () => {
    const [eyeFlag, setEyeFlag] = useState(false);
    const [formData, setFormdata] = useState({ email: "", password: "" });
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    let userExists = searchParams.get('exists');
    console.log(userExists);

    const showHands = () => {
        gsap.to('.left-hand', {
            y: 0,
            transform: 'rotate(20deg)',
            display: "block"
        });
        gsap.to('.right-hand', {
            y: 0,
            transform: 'rotate(-20deg)',
            display: "block"
        });
    }
    const hideHands = () => {
        gsap.to('.left-hand', {
            display: 'none',
            y: 120,
            transform: 'rotate(20deg)',
        });
        gsap.to('.right-hand', {
            display: 'none',
            y: 120,
            transform: 'rotate(-20deg)',
        });
    }
    useEffect(() => {
        const input = document.querySelectorAll('input[type="password"],input[type="text"]');
        if (eyeFlag) {
            showHands();
            if (input.length > 0) { // Check if there are any password inputs
                input[0].setAttribute('type', 'text'); // Change the type of the first password input to text
            }
        } else {
            if (input.length > 0) { // Check if there are any password inputs
                input[0].setAttribute('type', 'password'); // Change the type of the first password input to text
            } else {
                console.log("No password");
            }
            hideHands();
        }
    }, [eyeFlag]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/auth/signin', {
                email: formData.email,
                password: formData.password
            });
            console.log(response.data.token);
            if (response.status == 200) {
                toast.success("Login Successfully!!");
                localStorage.setItem('token', response.data.token);
                navigate("/home");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formData, [name]: value });
        // console.log(formData);
    }
    console.log(formData);
    return (
        <div className='row mx-0 h-screen justify-content-center align-items-center'>
            <div className="col-lg-4 col-10">
                <div className='text-center postion-relative img-cover'>
                    <img src={assets.girl} className='mx-auto p-2 bg-light shadow rounded-circle' width={100} />
                    <div className='left-eye'></div>
                    <div className='right-eye'></div>
                    <div className='mouth'></div>
                    <div className='left-hand'></div>
                    <div className='right-hand'></div>
                </div>
                <div className="mt-3 text-center">
                    <h2>Welcome Back</h2>
                    <p className='fw-semibold mt-2'>Don't have an account? <a href='#' className='text-primary'>Sign Up</a> here</p>
                </div>

                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <input type="email" className="form-control px-4 py-2 rounded-5 bg-light" name="email" value={formData.email} placeholder='Email' onChange={handleInput} />
                    </div>
                    <div className="form-group mt-3 pwd-cover">
                        <input type="password" className="form-control px-4 py-2 rounded-5 bg-light" name="password" value={formData.password} placeholder='Password' onChange={handleInput} onFocus={showHands} onBlur={hideHands} />
                        {eyeFlag && <FaEye className='eye-open' onClick={() => setEyeFlag(!eyeFlag)} />}
                        {!eyeFlag && <GoEyeClosed className='eye-close' onClick={() => setEyeFlag(!eyeFlag)} />}
                    </div>
                    <div className="mt-3">
                        <button className="form-control px-4 py-3 rounded-5 btn btn-primary">Login </button>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Login