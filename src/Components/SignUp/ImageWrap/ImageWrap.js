import signUpImg from "../../../assets/sigUpImg.svg";
import signInImg from "../../../assets/signInImg.svg";

function ImageWrap({bool}){
    return (
        <div className="SignUp__img-wrap">
            <img className="SignUp__img" src={bool ? signUpImg : signInImg} alt=""  />
        </div>
    )
}

export default ImageWrap