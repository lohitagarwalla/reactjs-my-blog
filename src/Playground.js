import {useState } from "react"
import BlogList from "./BlogList"
import useFetch from "./useFetch"

const Practice = () => {
    //useState 
    const [name, setName] = useState('Lohit')
    const changeName = (newName) => {
        setName(newName)
    }
    
    const handleClick = (e) => { //e is event
        console.log('Button clicked' , e)
    }
    const handleClickwithParameter = (name, e) => {
        console.log('click with parameter' + name)
        console.log(e)
    }

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id)
    //     setBlogs(newBlogs)
    // }

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
    //useEffect. Runs everytime it renders (i.e when state changes)

    // useEffect(() => {
    //     console.log('useEffect ran')
    // }, [name])  //will run once at the beginning and when name changes. If we want it to run when blogs changes then we need to add blogs in this array
    
    

    return ( 
        <div className="home">
            <h1>Home Page</h1>
            <button onClick={handleClick}> Click me</button>    
            <button onClick={(e) => handleClickwithParameter('lohit', e)}>With Parameter</button>
            <p>{name}</p>
            
            <button onClick={()=>changeName('Lohit Agarwalla')}>FullName</button>

            {error && <div>{error}...</div> }
            {isPending && <div>Loading...</div> }            
            {blogs && <BlogList blogs={blogs}  />}
        </div>
     );
}
 
export default Practice;
