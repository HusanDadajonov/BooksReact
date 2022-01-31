import { Link } from "react-router-dom"
import "./FormTitle.scss"

function FormTitle({title,text,path}){
    return (
        <>
            <h2 className="form__title">Sign {title}</h2>
            <div className="form__text-block d-flex align-items-center">
                <p className="form__text m-0">{text} have an account?</p>
                <Link className="form__link text-decoration-none" to={path}>Sign {title}</Link>
            </div>
        </>
    )
}

export default FormTitle