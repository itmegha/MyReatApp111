import React,{useEffect,useState} from "react";

const useApi = (url)=>{
    const[product,setProduct] = useState(null);
    const[loading,setLoading] = useState(false);
    
    const controller = new AbortController();

    useEffect(()=>{
        setLoading(true);
        fetch(url,{signal:controller.signal})
        .then(res=>res.json())
        .then(data=>setProduct(data))
        .finally(()=>{
            setLoading(false)
        }
        );
        return ()=>{
            controller.abort();
          }
          },[url])
          
    
    return {product,loading};
}
export default useApi;