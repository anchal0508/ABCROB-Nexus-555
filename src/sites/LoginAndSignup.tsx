import React, { useState } from 'react';
import API from '../axiosConfig';
import { useNavigate } from 'react-router-dom';

interface SignUpDetail {
    name: string;
    email: string;
    phone: string;
    DOB: string;
    password: string;
    confirmPass: string;
}

const LogIn: React.FC = () => {

    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [clickCount, setClickCount] = useState<number>(0);

    const [signup, setSignUp] = useState<SignUpDetail>({
        name: '',
        email: '',
        phone: '',
        DOB: '',
        password: '',
        confirmPass: ''
    });



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSignUp((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSignup = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage('');
        setIsLoading(true);

        if (signup.password !== signup.confirmPass) {
            setMessage('Both password should be matched');
        }
        const newUser = {
            name: signup.name,
            email: signup.email,
            phone: signup.phone,
            DOB: signup.DOB,
            password: signup.password,

        }
        try {
            const response = await API.post('/users/addUser', newUser);
            if (response.status === 201) {
                navigate('/online-classes');
            }
        } catch (error: any) {
            setMessage(error.response.data.message || "Unable to Register User");
        } finally {
            setIsLoading(false);
        }

    }


    // Animation section on the page

    function handleToggle(targetState: boolean) {
        setIsLogin(targetState);
        setClickCount(prev => prev + 1);
    }

    // Slider state checker
    let sliderClass = "";
    if (clickCount === 0) {
        sliderClass = "first-time-login";
    } else {
        sliderClass = isLogin ? "login-active" : "signup-active";
    }



    return (
        <div className='loginSignup-page'>
            <div className="card">

                <div className="msg">
                    {isLogin ? <h2>Welcome Back</h2> : <><h2>Join Us</h2><h2>Today</h2></>}

                    {message ?
                        (
                            <span className="error-message-text">{message}</span>

                        ) : (
                            <span>{isLogin ? '>> Be limitless <<' : "Let's Start with 555-Transformation Journey"}</span>
                        )
                    }
                    <div className="links">
                        {isLogin ? (
                            <>
                                <a className='anchorBtn' style={{ cursor: 'pointer' }} onClick={() => handleToggle(false)}> SignUp</a>
                                <span> | </span>
                                <a className='anchorBtn' style={{ cursor: 'pointer' }}> Forgot Password </a>
                            </>
                        ) : (
                            <a className='anchorBtn' style={{ cursor: 'pointer' }} onClick={() => handleToggle(true)}> LogIn</a>
                        )}
                    </div>
                </div>

                {/* LOGIN FORM */}
                <form className={`login-form ${isLogin ? 'login-active' : 'form-hidden'} ${clickCount === 0 ? 'first-load' : ''}`}>
                    <h1>LogIn</h1>
                    <label>Email <input type="email" placeholder=" : 555@xyz.com" /></label>
                    <label>Password <input type="password" placeholder=" : Password" /></label>
                    <button type="submit" className="primary-btn">LogIn</button>
                </form>

                {/* SIGNUP FORM: 🚨 महा-सुधार: सब-ग्रिड के साथ रेंडर होगा */}
                <form className={`signup-form ${!isLogin ? 'signup-active' : 'form-hidden'}`} onSubmit={handleSignup}>
                    <h1>SignUp</h1>

                    <div className="signup-grid">
                        <label htmlFor="name">Name
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                value={signup.name}
                                autoComplete='name'
                                onChange={handleChange}
                                placeholder='Ex: Angad Kumar'
                            />
                        </label>

                        <label htmlFor="email">Email
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                value={signup.email}
                                onChange={handleChange}
                                placeholder="555@xyz.com"
                            />
                        </label>

                        <label htmlFor="phone">Phone
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                required
                                value={signup.phone}
                                onChange={handleChange}
                                placeholder="9876543210"
                            />
                        </label>

                        <label htmlFor="DOB">Date of birth
                            <input
                                type="date"
                                name="DOB"
                                id="DOB"
                                required
                                value={signup.DOB}
                                onChange={handleChange}
                            />
                        </label>

                        <label htmlFor="password">Password
                            <input
                                type="password"
                                name="password"
                                id="password"
                                required
                                value={signup.password}
                                onChange={handleChange}
                                placeholder="Enter Password"
                            />
                        </label>

                        <label htmlFor="confirmPass">Confirm Password
                            <input
                                type="password"
                                name="confirmPass"
                                id="confirmPass"
                                required
                                value={signup.confirmPass}
                                onChange={handleChange}
                                placeholder="Confirm Password"
                            />
                        </label>
                    </div>

                    <button type="submit" className="primary-btn">
                        {isLoading ?
                            (<>loading...</>) : (<>SignUp</>)
                        }

                    </button>
                </form>


                {/* SLIDER */}
                <div className={`slider ${sliderClass}`}></div>
            </div>
        </div>
    );
}

export default LogIn;
