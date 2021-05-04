import {useState, useEffect} from 'react'

const useFetch = (url) => {

    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null)


    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
            .then(res => {
                if(!res.ok) {
                    throw new Error('Could not fetch data from localhost')
                }
                return res.json()
            })
            .then(data => {
                if( !data) throw new Error('Data is null')
                console.log(data)
                setData(data)
                setError(null)
                setIsPending(false)
               }).catch(e => {
                    if(e.name === 'AbortError'){
                        console.log(e.name)
                    }else {
                        setError(e.message)
                        setIsPending(false)
                    }
               })
        }, 1000)
    return () => abortCont.abort()   
    }, [url])

    return {data, isPending, error}
}

export default useFetch;



