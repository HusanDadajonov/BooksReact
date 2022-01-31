import HeroSliderBtn from "./HeroSliderBtn/HeroSliderBtn";
import "./Hero.scss";
import Search from "./Search/Search";
import { useRef } from "react";
import HeroBg from "../../../assets/heroBg.jpg";
import { useState } from "react/cjs/react.development";

function Hero({setInpVal}){
    const heroRef = useRef();
    const [sliderActive,setSliderActive] = useState({
        activeSlide: null,
        slides : [
            {
                id : 1,
                active : "hero__slider-btns-active",
            },
            {
                id : 2,
                active : "",
            },
            {
                id : 3,
                active : "",
            },
            {
                id : 4,
                active : "",
            },
        ]
    })
    console.log(sliderActive);

    return (
        <div className="container">
            <div className="hero">
                <div  className="hero__wrap">
                    <img ref={heroRef} className="hero__img" src={HeroBg} alt="" />
                    <h2 className="hero__title">Temuriylar davri adabiyoti</h2>
                    <ul className="hero__slider-btns--box d-flex align-items-center list-unstyled">
                        {
                            sliderActive.slides.map((item,index) => (
                                <HeroSliderBtn 
                                    id={item.id}
                                    active={item.active} 
                                    heroRef={heroRef}
                                    key={item.id}
                                    index={index}
                                    setSliderActive={setSliderActive}
                                    sliderActive={sliderActive}
                                />
                            ))
                        }
                    </ul>
                </div>
                <Search setInpVal={setInpVal} />
            </div>
        </div>
    )
}

export default Hero