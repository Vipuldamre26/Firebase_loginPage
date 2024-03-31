import './navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();


    return(
        <div className='navbar'>
            <h1>Hello</h1>
            <div className='btn'>
                <button onClick={() => navigate('./login')}>SignIn</button>
                <button onClick={() => navigate('./signup')}>SignUp</button>
            </div>
        </div>
    )
}

export default Navbar;