import { useState } from "react";
import ImageWrap from "../SignUp/ImageWrap/ImageWrap";
import Form from "../SignUp/Form/Form";

function SignIn(){
    const [arr,setArr ] = useState([
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
                    <ImageWrap bool = {false}/>
                </div>
                <div className="SignUp__col col-6">
                    <Form  title = "in" text= "Do not you" arr={arr} path ="/"/>
                </div>
            </div>
        </div>
    )
}

export default SignIn