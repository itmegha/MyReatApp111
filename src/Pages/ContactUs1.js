import React, { useState } from "react";

function ContactUs(){
    const[formData,setFormData] = useState({
        uname:'',
        email:'',
        des:'',
        con:'',
        sub:'false'
    });

     const[error,setError]= useState();
   
    const onHandleForm  = (event)=>{
        event.preventDefault();
        console.log(formData.uname);
        setError({});
        if(formData.uname=='' || formData.uname==null){
             setError({
                name:"Can not be blank or null"
             })
        }

    }

    const handleForm = (event)=>{
        setFormData(
            {
                ...formData,
            [event.target.name] : event.target.type === "checkbox" ?event.target.checked:event.target.value
            }
        )
        
    }

    return (
        <div style={{width:300}}>
            <h1>MyForm</h1>
            <form action="#" onSubmit={onHandleForm}>
            <div className="mb-3 mt-3">
            <label htmlFor="name" className="form-label">Username:</label>
            <input 
            type="text" 
            className="form-control" 
            id="uname" 
            name="uname"
            value={formData.uname} 
                onChange={handleForm}
            />
            <div style={{color:'red'}}>{error && error.name}</div>
            </div>
            <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input 
            type="email" 
            className="form-control" 
            id="email" 
            name="email"
            value={formData.email} 
                onChange={handleForm}
            />
            </div>
            <div className="mb-3 mt-3">
            <label htmlFor="des" className="form-label">Description : </label>
            <textarea 
            type="text" 
            className="form-control" 
            id="des" 
            name="des"
            cols={10}
            rows={5}
            value={formData.des} 
                onChange={handleForm}
            />
            </div>
            <div className="mb-3 mt-3">
            <label htmlFor="con" className="form-label">Contry : </label>
            <select
            className="form-control" 
            id="con" 
            name="con"
            value={formData.con} 
                onChange={handleForm}
            >
                <option value={"India"}>India</option>
                <option value={"USA"}>USA</option>
                <option value={"Japan"}>Japan</option>
            </select>
            </div>
            <div className="mb-3 mt-3">
            <label htmlFor="sub" className="form-label">Subscribe : </label>
            <input type="checkbox" 
            id="sub" 
            name="sub"
            checked={formData.sub} 
                onChange={handleForm}
            />
               
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            UserName : {JSON.stringify(formData)}
        </div>
    );
}
export default ContactUs;