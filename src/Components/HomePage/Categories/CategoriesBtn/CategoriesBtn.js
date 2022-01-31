function CategoriesBtn({text,active,index,categoriesActive,setategoriesActive}){
    function ActiveChange(index){
        setategoriesActive({...categoriesActive,activeCategory : categoriesActive.categories[index]})
        categoriesActive.categories[1].active = ""
    }

    function ActiveChangeStyle(index){
        if(categoriesActive.categories[index].id === categoriesActive.activeCategory.id)return `categories__btn-item categories__btn-item--active`;
        else return `categories__btn-item `
    }

    return(
        <li onClick={()=> ActiveChange(index)} className={`${ActiveChangeStyle(index)} ${active}`}>
            <button className="categories__btn">{text}</button>
        </li>
    )
}

export default CategoriesBtn