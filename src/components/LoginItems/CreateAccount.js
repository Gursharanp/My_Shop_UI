import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../../style/CreateAccount.module.css';
export default function CreateAccount() {
    const navigate=useNavigate();
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');
    const [emailCheck, setEmailCheck] = useState(false);
    const [passwordCheck, setPasswordCheck] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(' ');
    const [confirmPasswordCheck, setConfirmPasswordCheak] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log('email: ', email)
        console.log('password: ', password)

        if (!email.includes('@') || !email.includes('.')) {
            setEmailCheck("Enter correct email !  ")
            return;
        } else {
            setEmailCheck(false);
        }
        if(password != confirmPassword){
            setConfirmPasswordCheak("Password does't match");
            return;
        }else{
            setConfirmPasswordCheak(false);
        }

        if (password.length < 6) {
            setPasswordCheck("Password length must be greater than 6")
            return;
        } else {
            setPasswordCheck(false);
        }
        let responceData = await axios.post("http://localhost:8080/api/signup", {
            username: email,
            password
        })
        console.log("responceData", responceData.data);
        if(responceData.data.success==1){

            navigate("/login");
        }


    }
    return (
        <div className={styles.login}>
            <div className={styles.head}>
                <Link to="/">
                <div className={styles.bhome}>
                    Home
                </div>
                </Link>
                <div className={styles.licon}>
                    <img src="https://blinkit.com/images/header/blinkit_logo-3898547.png" />
                </div>
            </div>
            <div className={styles.outer}>
                <div className={styles.tlogin}>
                    Create-Account
                </div>
                <div className={styles.tname}>
                    <div className={styles.tt}>
                        Email or Mobile Number
                    </div>
                    <div className={styles.linput}>
                        <input type="text" placeholder='example@example.com' onChange={(e) => setEmail(e.target.value)}  />
                    </div>
                </div>
                <div className={styles.pname}>
                    <div className={styles.tt}>
                        Password
                    </div>
                    <div className={styles.pinput}>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className={styles.pname}>
                    <div className={styles.tt}>
                        Confirm-Password
                    </div>
                    <div className={styles.pinput}>
                        <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                    </div>
                </div>
                <div style={{ color: "red" }}>
                    {emailCheck && <span>{emailCheck}</span>}
                    {passwordCheck && <span>{passwordCheck}</span>}
                    {confirmPasswordCheck && <span>{confirmPasswordCheck}</span>}
                </div>
                <div className={styles.lbtn}>
                    <button onClick={handleLogin}>Create-Account</button>
                </div>

            </div>

        </div>
    )
}
