import { Link } from "react-router-dom"
import "./FormBtn.scss"

function FormBtn(){
    return (
        <Link to="/home" className="form__btn">Next step</Link>
    )
}

export default FormBtn