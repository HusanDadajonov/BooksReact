import "./Search.scss"

function Search ({setInpVal}){

    function formSubmit(e){
        e.preventDefault();
    }

    return (
        <div className="hero__search search">
            <div className="search__wrap d-flex flex-column">
                <h3 className="search__title">qidirish</h3>
                <form className="search__form d-flex align-items-center" onSubmit={formSubmit}>
                    <label htmlFor="searchInp">
                        <input className="search__inp" type="text" id="searchInp" name="searched-Book" placeholder="Adiblar, kitoblar, audiolar, maqolalar..." autoComplete="off" onChange={(e)=> setInpVal(e.target.value)}/>
                    </label>
                    <button className="search__btn d-flex align-items-center">
                        <svg className="search__icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                        Izlash
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Search