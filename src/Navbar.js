//sfc for creating stateless functional component
import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>My-Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <Link to="/Playground">Playground</Link>
            </div>
        </nav>
     );
} 
export default Navbar;