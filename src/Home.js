import { useState } from "react"

const Home = () => {
    const handleClick = (e) => { //e is event
        console.log('Button clicked' , e)
    }

    const [name, setName] = useState('Lohit')

    const changeName = (newName) => {
        setName(newName)
    }

    const handleClickwithParameter = (name, e) => {
        console.log('click with parameter' + name)
        console.log(e)
    }
    return ( 
        <div className="home">
            <h1>Home Page</h1>
            <button onClick={handleClick}> Click me</button>    
            <button onClick={(e) => handleClickwithParameter('lohit', e)}>With Parameter</button>
            <br/>
            <p>{name}</p>
            <button onClick={()=>changeName('Lohit Agarwalla')}>FullName</button>

        </div>
     );
}
 
export default Home;
