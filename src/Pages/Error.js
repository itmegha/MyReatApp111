import { useRouteError } from "react-router-dom";

function Error(){

    const err = useRouteError();
    console.log(err);
    return(
        <>
        <h1 style={{color:"red"}}>{err.status}</h1>
        <h2 style={{color:"green"}}>Someting went wrong...{err.statusText}</h2>
        <h3>{err.data}</h3>
        </>
    );
}
export default Error;