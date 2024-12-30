import React from "react";
import { useForm } from "react-hook-form";

function ContactUs(){
    const{register,handleSubmit, formState: { errors }} = useForm();
   
    const onHandle  = (data)=>{
        console.log(data);
    }

    return (
        <div style={{width:300}}>
            <h1>MyForm</h1>
            <form onSubmit={handleSubmit(onHandle)}>
            <div className="mb-3 mt-3">
            <label htmlFor="name" className="form-label">Username:</label>
            <input 
            type="text" 
            className="form-control" 
            id="uname" 
            {...register('name',{required:"can not be blank", minLength:{
              value:3,
              message:"length should be 3" }})}
            />
            </div>
            {errors.name?.message}
            <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input 
            type="email" 
            className="form-control" 
            id="email" 
           {...register('email',{required:"can not be blank"})}
            />
            </div>
            {errors.email?.message}
            <br/>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
export default ContactUs;