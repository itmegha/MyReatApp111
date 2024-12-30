import { useSearchParams } from "react-router-dom";

function Contact(){
     const[searchParam,setsearchParam]= useSearchParams();
     console.log(searchParam.get('name'));
     console.log(searchParam.get('email'));
    return(
        <>
        <h2>This is Contact Page</h2>
        <button onClick={()=>{
            setsearchParam({name:'Riya',email:searchParam.get('email')})
        }}>Change</button>
        </>
    );
}
export default Contact;