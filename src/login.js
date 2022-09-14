import './page.css';
import { Link } from "react-router-dom";
function login() {
        return (
                <div className="background">
                        <text id='x1'>Netflix</text>
                        <text id='x2'>See What's next.</text>
                        <text id='x3'>WATCH ANYWHERE. CANCEL ANYTIME.</text>
                        <div className="inputbox">
                        <img id="shandi" src={'./images/n.jpg'}></img>
                                <input id="username"  type="email" placeholder="Enter Your E-mail"></input>
                                <input id="password" type={"text"} placeholder="Enter Your Password"></input>
                        </div>
                        <Link id="log" to="netflix"><b>Login</b></Link>
                        <br />
                </div>
        );
}
export default login;