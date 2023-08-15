// this piece of code is resable and could be used to fetch any url and also returns error and loading data 
import { useEffect, useState } from "react";

const useFetch = ((url) => {
    const [data, setData]=useState(null)
    const [pending, setPending]=useState(true)
    const [error, setError]=useState(null)

    useEffect(() => {
 
        const abortcont= new AbortController();

        setTimeout(() => {
            fetch(url,{signal:abortcont.signal})
                .then(res => {
                    // console.log(res)
                    if (res.ok != true) {
                        throw Error('no such file found !')
                    }
                    return res.json()
                })
                .then(data => {
                    setPending(false)
                    setData(data)
                    setError(null)
                })
                .catch(err => {
                    if(err.name==="AbortError"){
                        console.log("fetched abort")
                    }else{
                        setPending(false)
                        setError(err.message)
                    }
                })
            // the catch, catches an error and saves the error obj into the err and then below we display the message component of the error object using err.message 
        }, 1000);
        return ()=>{
            abortcont.abort();
        }
    }, [url])
    return {data, pending, error};
});

export default useFetch;

// fetch aborted and abortcontroller and cleanup function