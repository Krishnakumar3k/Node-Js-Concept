import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    /* Logout */
    const logout = () => {
        // console.warn("logTest")
        localStorage.clear();
        navigate('/signup');
    };

    return (
       <div>

                
              {  auth ? <ul className="nav-ul">
                  <img className='logo' src="https://www.logolynx.com/images/logolynx/56/56afea50b83164e3e272d4ebeccd94fb.png" alt="" /> 
                <li><Link to='/'>Products</Link></li>
                <li><Link to='/add'>Add Products</Link></li>
                <li><Link to='/update'>Update Products</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link onClick={logout} to='/Signup'> Logout ({JSON.parse(auth).name})</Link></li>

                {/* Below code for After Signup it will show only logout code */}
                {/* 
                <li>
                    {auth ? <Link onClick={logout} to='/Signup'> Logout</Link> :
                    <Link to='/signup'>SignUp</Link>}
                </li>
                <li><Link to='/login'>Login</Link></li>
                */}

              
            </ul>
            :
            <ul className="nav-ul" >
              <img className='logo' src="https://www.logolynx.com/images/logolynx/56/56afea50b83164e3e272d4ebeccd94fb.png" alt="" />
            <li><Link to='/signup'>SignUp</Link></li>
            <li><Link to='/login'>Login</Link></li>
        </ul>
        }
       </div>
    );
};

export default NavBar;
