import { useEffect, useState } from 'react';
import gsap from 'gsap';
import assets from '../../assets/assets';
import { FcGoogle } from 'react-icons/fc';
import './Register.css';
import { FaEye } from 'react-icons/fa';
import { GoEyeClosed } from 'react-icons/go';
import { toast, ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { GetPath } from '../../routes/Path';
import axios from 'axios';

const Register = () => {
    const [eyeFlag, setEyeFlag] = useState(false);
    const [formData, setFormData] = useState(false);
    const navigate = useNavigate();

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
        const input = document.querySelectorAll('.password');
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

    const setRegsiterData = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        // Handle form submission        
        e.preventDefault();

        const response = await axios.post(`/auth/signup`, {
            name: formData.name,
            email: formData.email,
            password: formData.password
        });
        if (response.status === 201)
            toast.success('Registered Successfully');
        if (!response.data.is_email_verified) {
            navigate(GetPath('verify'));
        } else if (response.data.is_email_verified) {
            navigate(GetPath('login'));
        }
    }

    return (
        <>
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
                        <h2>Welcome</h2>
                        <p className='fw-semibold mt-2'>Already have an account? <Link to={GetPath('login')} className='text-primary'>Sign In</Link> here</p>
                    </div>
                    {/* <div className='mt-4'>
                        <button className='btn form-control p-2 bg-white border rounded-5 shadow-sm d-flex justify-content-center align-items-center gap-3 text-capitalize fs-6'><FcGoogle size={20} /> Register With Google</button>
                    </div>
                    <div className="d-flex gap-2 align-items-center my-3">
                        <div className='left-bar border'></div>
                        <div>Or</div>
                        <div className='right-bar border'></div>
                    </div> */}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mt-3">
                            <input type="text" className="form-control px-4 py-2 rounded-5" name="name" placeholder='Name' onChange={setRegsiterData} />
                        </div>
                        <div className="form-group mt-3">
                            <input type="email" className="form-control px-4 py-2 rounded-5" name="email" placeholder='Email' onChange={setRegsiterData} />
                        </div>
                        <div className="form-group mt-3 pwd-cover">
                            <input type="password" className="form-control px-4 py-2 rounded-5 password" name="password" placeholder='Password' onChange={setRegsiterData} onFocus={showHands} onBlur={hideHands} />
                            {eyeFlag && <FaEye className='eye-open' onClick={() => setEyeFlag(!eyeFlag)} />}
                            {!eyeFlag && <GoEyeClosed className='eye-close' onClick={() => setEyeFlag(!eyeFlag)} />}
                        </div>
                        <div className="mt-3">
                            <button className="form-control px-4 py-3 rounded-5 btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div >
            <ToastContainer />
        </>

    )
}

export default Register