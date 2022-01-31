import { useState } from "react";
import "./FormInput.scss";
function FormInput({id,type,placeholder, setFname ,setLname ,setPhone ,setEmail ,setPassword}){
   

    function inputHandler(e){
        if(e.target.id === "firstName")setFname(e.target.value);
        if(e.target.id === "lastName") setLname(e.target.value);
        if(e.target.id === "phone")setPhone(e.target.value);
        if(e.target.id === "email") setEmail(e.target.value);
        if(e.target.id === "password") setPassword(e.target.value);
    }

    return (
        <label className="form__label" htmlFor={id}>
            <input onChange={(e)=>inputHandler(e)} className="form__inp" type={type} id={id} name={id} placeholder={placeholder} autoComplete="off"/>
        </label>
    )
}

export default FormInput