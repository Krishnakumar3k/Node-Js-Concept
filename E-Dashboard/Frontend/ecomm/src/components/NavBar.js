import {Link, useNavigate} from 'react-router-dom';
const NavBar = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    /* Logout  */
    const logout = ()=>{
    // console.warn("logTest")
    localStorage.clear();
    navigate('/signup')
    }

    return (
        <>
           <ul className="nav-ul">
                <li><Link to='/'>Products</Link></li>
                <li><Link to='/add'>Add Products</Link></li>
                <li><Link to='/update'>Update Products</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
               
               {/*Below code for After Signup it will show only logout code */}
               {/*  <li>{auth ? <Link onClick={logout} to='/Signup'> Logout</Link>:
                <Link to='/signup'>SignUp</Link>}</li>
               <li><Link to='/login'>Login</Link></li>  */} 

                {
                    auth ? <li><Link onClick={logout} to='/Signup'> Logout</Link></li>
                    :
                    <>
                        <li> <Link to='/signup'>SignUp</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </>

                }
           </ul>
        </>
    );
};

export default NavBar;


