import { useState } from 'react';

function LogIn() {
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [clickCount, setClickCount] = useState<number>(0);

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
                    <span>{isLogin ? '>> Be limitless <<' : "Let's Start with 555-Transformation Journey"}</span>

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
                <form className={`signup-form ${!isLogin ? 'signup-active' : 'form-hidden'}`}>
                    <h1>SignUp</h1>
                    
                    <div className="signup-grid">
                        <label>Name <input type="text" placeholder="Ex: Anchal" /></label>
                        <label>Email <input type="email" placeholder="555@xyz.com" /></label>
                        <label>Phone <input type="tel" placeholder="9876543210" /></label>
                        <label>Date of birth <input type="date" /></label>
                        <label>Password <input type="password" placeholder="Enter Password" /></label>
                        <label>Confirm Password <input type="password" placeholder="Confirm Password" /></label>
                    </div>

                    <button type="submit" className="primary-btn">SignUp</button>
                </form>

                {/* SLIDER */}
                <div className={`slider ${sliderClass}`}></div>
            </div>
        </div>
    );
}

export default LogIn;
