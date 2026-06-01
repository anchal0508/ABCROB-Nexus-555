import Footer from "./Footer";
import Header from "./1-portfolio/homePage/components/Header";

function SignUp() {
    return (<>

        <Header />
        <div className="form-container">
            <form>
                <h1>SignUp</h1>
                <label htmlFor="name">Name
                    <input type="text" name="name" id="name" placeholder="Ex: John" />
                </label>
                <label htmlFor="email">Email
                    <input type="email" name="email" id="email" placeholder="555@xyz.com" />
                </label>
                <label htmlFor="phone">Phone
                    <input type="tel" name="phone" id="phone" placeholder="9876543210" />
                </label>
                <label htmlFor="dob">Date of birth
                    <input type="date" name="dob" id="dob" />
                </label>
                <label htmlFor="pass">Password
                    <input type="Password" name="pass" id="pass" placeholder="Enter your Password" />
                </label>
                <label htmlFor="confirmPass">Confirm Password
                    <input type="Password" name="confirmPass" id="confirmPass" placeholder="Confirm your Password" />
                </label>
                <button type="submit" className="primary-btn">SignUp</button>


            </form>
        </div>
        <Footer />

    </>)
}


export default SignUp;