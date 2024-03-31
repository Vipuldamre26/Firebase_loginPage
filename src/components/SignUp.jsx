import { useRef, useState } from 'react';
import './signup.css';
import  app  from '../Firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

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
            const result = await createUserWithEmailAndPassword(auth, ref1.current.value, ref2.current.value);
            console.log(result);
            navigate('/homepage');

        } catch (error) {
            console.log(error);
        }

    }

    return(
        <div className='main'>
            <h1>Sign Up</h1>
            <div className='signup'>
                <input type='text' placeholder='Email' ref={ref1}></input>
                <input type='password' placeholder='Password' ref={ref2}></input>
                <button type='submit' onClick={handleData}>Sign Up</button>
            </div>
        </div>
    )
}


export default SignUp;