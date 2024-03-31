import { useRef, useState } from 'react';
import './signin.css';
import  app  from '../Firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

    const auth = getAuth();
    const navigate = useNavigate();

    const ref1 = useRef();
    const ref2 = useRef();

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');


    const handleData = async () => {
        setEmail(ref1.current.value);
        setPassword(ref2.current.value);
        console.log(email, password);

        try {
            const result = await signInWithEmailAndPassword(auth, ref1.current.value, ref2.current.value);
            console.log(result.user);
            alert('Sucessfully Login...');
            navigate('/homepage');

        } catch (error) {
            console.log(error);
        }

    }

    return(
        <div className='main'>
            <h1>Login</h1>
            <div className='signup'>
                <input type='text' placeholder='Email' ref={ref1}></input>
                <input type='password' placeholder='Password' ref={ref2}></input>
                <button type='submit' onClick={handleData}>SignIn</button>
            </div>
        </div>
    )
}


export default SignIn;