import Form from "./Form/Form";
import "./SignUp.scss";
import ImageWrap from "./ImageWrap/ImageWrap";
import { useState } from "react";

function SignUp(){
    const [arr,setArr ] = useState([
        {
            id : "firstName",
            type : "text",
            placeholder : "First Name"
        },
        {
            id : "lastName",
            type : "text",
            placeholder : "Last Name"
        },
        {
            id : "phone",
            type : "number",
            placeholder : "Phone"
        },
        {
            id : "email",
            type : "email",
            placeholder : "Email"
        },
        {
            id : "password",
            type : "password",
            placeholder : "Password"
        }
    ])

    return(
        <div className="SignUp">
            <div className="SignUp__row row">
                <div className="SignUp__col col-6">
                    <ImageWrap bool = {true}/>
                </div>
                <div className="SignUp__col col-6">
                    <Form  title = "up" text= "Already" arr={arr} path ="/signIn"/>
                </div>
            </div>
        </div>
    )
}

export default SignUp