import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Categories from "./Categories/Categories";
import { useState } from "react/cjs/react.development";

function HomePage(){
    const [inpVal,setInpVal] = useState("")
    const [arr,setArr] = useState(
      [
        {
            id : 1,
            img : `https://upload.wikimedia.org/wikipedia/uz/1/19/Dunyoning-ishlari-muqova.jpg`,
            author : `O’tkir Hoshimov`,
            title : `Dunyoning ishlari`,
            thought : 3400,
            starCount : 4.1,
        },
        {
            id : 2,
            img : `https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1588324229l/13363932._SY475_.jpg`,
            author : `O’tkir Hoshimov`,
            title : `Ikki eshik orasi`,
            thought : 300,
            starCount : 4.3,
        },
        {
            id : 3,
            img : `https://tovar.uz/images/company/444/tovar/6647/o_1_5eda0a721dbe5.jpg`,
            author : `O’tkir Hoshimov`,
            title : `Tushda kechgan umrlar`,
            thought : 5200,
            starCount : 4.4,
        },
        {
            id : 4,
            img : `https://kitobxon.com/img_knigi/2431.jpg`,
            author : `O’tkir Hoshimov`,
            title : `“Ajdar”ning tab`,
            thought : 1400,
            starCount : 3.9,
        },
        {
            id : 5,
            img : `https://kitobxon.com/img_knigi/338.jpg`,
            author : `Odil Yoqubov`,
            title : `Ulug’bek Xazinasi`,
            thought : 1400,
            starCount : 3.9,
        },
        {
            id : 6,
            img : `https://assets.asaxiy.uz/product/items/desktop/15ade6e93794485a3f9961bf3693e2392020020813545127630mpXe9fqEbp.jpg`,
            author : `Mirkarim Osim`,
            title : `Ajdodlarimiz fojia..`,
            thought : 3400,
            starCount : 4.1,
        },
        {
            id : 7,
            img : `https://kitobxon.com/img_knigi/1453.jpg`,
            author : `O’tkir Hoshimov`,
            title : `Yulduzli tunlar`,
            thought : 300,
            starCount : 4.3,
        },
        {
            id : 8,
            img : `https://kitobxon.com/img_knigi/3529.jpg`,
            author : `Abdulla Qodiriy`,
            title : `O’tkan kunlar`,
            thought : 5200,
            starCount : 4.4,
        },
        {
            id : 9,
            img : `https://assets.asaxiy.uz/product/items/desktop/5e15c15e8afbf.jpg`,
            author : `Erkin Vohidov`,
            title : `Ruhlar isyoni`,
            thought : 1400,
            starCount : 3.9,
        },
        {
            id : 10,
            img : `https://kitobxon.com/img_knigi/4111.jpg`,
            author : `Said Ahmad`,
            title : `UFq`,
            thought : 1400,
            starCount : 3.9,
        },
        {
            id : 11,
            img : `https://kitobxon.com/img_knigi/1453.jpg`,
            author : `O’tkir Hoshimov`,
            title : `Yulduzli tunlar`,
            thought : 300,
            starCount : 4.3,
        },
        {
            id : 12,
            img : `https://kitobxon.com/img_knigi/3529.jpg`,
            author : `Abdulla Qodiriy`,
            title : `O’tkan kunlar`,
            thought : 5200,
            starCount : 4.4,
        },
    ]
    )
    return(
      <>
        <Header />
        <Hero setInpVal={setInpVal} />
        <Categories inpVal={inpVal} arr={arr} setArr={setArr}/>
      </>
    )
}

export default HomePage