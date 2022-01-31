import HeroBg from "../../../../assets/heroBg.jpg"

function HeroSliderBtn({active,heroRef,id,index,sliderActive,setSliderActive}){
    function SliderBtnHandler(e){
        if(e.target.id == 1)heroRef.current.src = HeroBg;
        if(e.target.id == 2)heroRef.current.src = `https://oyina.uz/storage/articles/October2021/mXkiVE6MQV0smPrvPdoC.jpg`;
        if(e.target.id == 3)heroRef.current.src = `https://uzhurriyat.uz/wp-content/uploads/2017/04/00744.jpg`;
        if(e.target.id == 4)heroRef.current.src = `https://storage.kun.uz/source/thumbnails/_medium/7/VhkLJPOWTjfpURh6HxFMjg2Or3OayKuu_medium.jpg`;
    }

    function ActiveChange(index){
        setSliderActive({...sliderActive,activeSlide: sliderActive.slides[index]})
   
        sliderActive.slides[0].active = "";
    }

    function ActiveChangeStyle(index){
        if(sliderActive.slides[index] === sliderActive.activeSlide)return `hero__slider-item text-decoration-none  hero__slider-btns-active `;
        else return"hero__slider-item text-decoration-none"
    }

    return(
        <li id={id} onClick={(e) => {SliderBtnHandler(e); ActiveChange(index)} } className={`${ActiveChangeStyle(index)} ${active}`}>
            <button id={id}  className="hero__slider__btn"></button>
        </li>
    )
}

export default HeroSliderBtn