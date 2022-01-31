import CategoriesBtn from "./CategoriesBtn/CategoriesBtn"
import "./Categories.scss"
import Cards from "./Cards/Cards"
import { useState } from "react/cjs/react.development"

function Categories({inpVal,setArr,arr,formChek}){
    const [categoriesActive,setategoriesActive] =  useState({
        activeCategory: 1,
        categories : [
            {
                id : 1,
                text : "Temuriylar davri",
                active : ""
            },
            {
                id : 2,
                text : "Jadid adabiyoti",
                active : "categories__btn-item--active"
            },
            {
                id : 3,
                text : "Sovet davri",
                active : ""
            },
            {
                id : 4,
                text : "Mustaqillik davri",
                active : ""
            },
        ]
    })

    return(
        <div className="categories">
            <div className="container">
                <h2 className="categories__title">asosiy kategoriyalar</h2>
                <ul className="categories__btn-list list-unstyled d-flex align-items-center">
                    {
                        categoriesActive.categories.map((item,index) => (
                            <CategoriesBtn 
                                key={index}
                                text={item.text} 
                                active={item.active}
                                index={index}
                                categoriesActive={categoriesActive}
                                setategoriesActive={setategoriesActive}
                            />
                        ))
                    }
                </ul>
                <Cards inpVal={inpVal} setArr={setArr} arr={arr} formChek={formChek}/>
            </div>
        </div>
    )
}

export default Categories