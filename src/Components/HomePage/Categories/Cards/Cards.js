import CardsItem from "./CardsItem/CardsItem"
import "./Cards.scss"

function Cards ({inpVal,setArr,arr}){
    const filtred = arr.filter(item => item.title.toLowerCase().includes(inpVal.toLowerCase()))
    if(inpVal.length != 0){
        return (
            <div className="cards">
                <ul className="cards__list  justify-content-between">
                    {
                        filtred.map(item => (
                            <CardsItem  
                                key={item.id}
                                id={item.id} 
                                img={item.img} 
                                author={item.author} 
                                title={item.title} 
                                thought={item.thought} 
                                starCount={item.starCount}
                            />
                        ))
                    }
                </ul>
            </div>
        )
    }
    else{
        return (
            <div className="cards">
                <ul className="cards__list  justify-content-between">
                    {
                        arr.map(item => (
                            <CardsItem  
                                key={item.id}
                                id={item.id} 
                                img={item.img} 
                                author={item.author} 
                                title={item.title} 
                                thought={item.thought} 
                                starCount={item.starCount}
                            />
                        ))
                    }
                </ul>
            </div>
        )
    }
    
}
export default Cards