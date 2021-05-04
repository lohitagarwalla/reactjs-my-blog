import {Link} from 'react-router-dom'

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Sorry</h1>
            <p>This page does not  exist</p>
            <Link to="/">Home page</Link>
        </div>
     );
}
 
export default NotFound;