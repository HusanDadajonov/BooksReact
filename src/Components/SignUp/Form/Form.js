import FormTitle from "./FormTitle/FormTitle";
import FormInput from "./FormInput/FormInput";
import FormBtn from "./FormBtn/FormBtn";
import { useState } from "react";

function Form({title,text,arr,path}){
    const [fnmae,setFname] = useState("");
    const [lnmae,setLname] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    function FormHandler(e){
        e.preventDefault()
    }
    return(
        <div className="SignUp__form form">
            <FormTitle title = {title} text={text} path={path}/>
            <form onSubmit={FormHandler} className="form__wrap d-flex flex-column">
                {
                    arr.map(item => 
                    <FormInput 
                        key={item.id}  
                        id = {item.id} 
                        type ={item.type} 
                        placeholder = {item.placeholder} 
                        setFname = {setFname}
                        setLname = {setLname}
                        setPhone = {setPhone}
                        setEmail = {setEmail}
                        setPassword = {setPassword}
                    />)
                }
                <FormBtn />
            </form> 
        </div>
    )
}

export default Form;