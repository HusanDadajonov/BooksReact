import "./Header.scss"
import NavItem from "./NavItem/NavItem";
import AvatarImg from "../../../assets/avatar.jpg"
import { Link, NavLink,Outlet } from "react-router-dom";
import { useState } from "react/cjs/react.development";

function Header(){
    const [activeChange,setActiveChange] = useState({
        activeObj: 1,
        objects: [
            {id : 1,text : "Bosh sahifa", path : "/home",active:"nav__item-active"},
            {id : 2,text : "Nasr", path : "/home",active:""},
            {id : 3,text : "Nazm", path : "/home",active:""},
            {id : 4,text : "Maqolalar", path : "/home",active:""},
            {id : 5,text : "Forum", path : "/home",active:""},
        ]
    })

    return(
        <header className="header">
            <div className="header__container container">
                <div className="header__row d-flex align-items-center">
                    <Link className="header__logo" to="/home">Badiyat</Link>
                    <div className="header__wrap d-flex align-items-center">
                        <nav className="header__nav nav">
                            <ul className="nav__list list-unstyled d-flex align-items-center">
                                {
                                    activeChange.objects.map((item,index) => (
                                        <NavItem activeChange={activeChange} 
                                            setActiveChange={setActiveChange}  
                                            key={item.id} 
                                            text={item.text} 
                                            path={item.path}
                                            index={index}
                                            objects={activeChange.objects}
                                            activeObj = {activeChange.activeChange}
                                            active={item.active}
                                        />
                                    ))
                                }
                            </ul>
                        </nav>
                        <div className="header__account d-flex align-items-center">
                            <button className="header__btn">
                                <img className="header__img" src={AvatarImg} alt="avatar" />
                            </button>
                            <svg className="header__chevron" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header