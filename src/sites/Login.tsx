import React from 'react';
import Footer from "./1-portfolio/homePage/components/Footer";
import Header from "./1-portfolio/homePage/components/Header";

function LogIn() {


    function handleLogin(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault(); 

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email');
        const password = formData.get('pass');

        console.log("Email:", email);
        console.log("Password:", password);

    }

    return (<>
        <Header />
        <div className="form-container">
            <form onSubmit={handleLogin} method="POST">
                <h1>LogIn</h1>
                <label htmlFor="name">Email
                    <input type="email" name="email" id="email" placeholder="555@xyz.com" />
                </label>

                <label htmlFor="pass">Password
                    <input type="password" name="pass" id="pass" />
                </label>
                <button type="submit" className="primary-btn">LogIn</button>
            </form>
        </div>
        <Footer />
    </>)
}


export default LogIn;