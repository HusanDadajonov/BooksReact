import { Link, NavLink,Outlet } from "react-router-dom";

function NavItem({text,path,active,index ,setActiveChange,activeChange,activeObj}){
    
    function toggleActive(index){
        setActiveChange({...activeChange,activeObj:activeChange.objects[index] })
        activeChange.objects[0].active = ""
    }

    function toogleActiveStyle(index){ 
        if(activeChange.objects[index] === activeChange.activeObj)return "nav__link text-decoration-none   nav__item-active"
        else return "nav__link text-decoration-none"
    }

    return (
        <li id={index}  className={`nav__item `}>
            <NavLink id={index} onClick={(e)=> toggleActive(index)} className={`${toogleActiveStyle(index)} ${active}`}  to={path}>{text}</NavLink>
        </li>
    )
}

export default NavItem 