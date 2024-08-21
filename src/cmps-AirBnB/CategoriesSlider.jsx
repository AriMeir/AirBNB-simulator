import Slider from "react-slick";
import { useRef } from "react";
import { svgIcons } from './Svgs'


const Category = ({ image, text, onClick }) => {
    return (
        <section className="category" onClick={() => onClick(text)}>
            <div className="bg-image-container" style={{ backgroundImage: `url(${image})` }}>
            </div>
            <div className="text-container"> {text} </div>
        </section>
    )
}

export const SliderComp = ({ data, onCategoryClick }) => {
    const sliderRef = useRef();
    const settings = {
        arrows: false,
        swipeToSlide: true,
        infinite: true,
        slidesToShow: 15,
        slidesToScroll: 1,
    };
    return (
        <>
            <div className="categories main-content">
                <div className="wrapper">
                    <div onClick={() => sliderRef.current.slickPrev()} className="prev_category">
                        {svgIcons.arrowLeft}
                    </div>
                    <Slider {...settings} ref={sliderRef}>
                        {data?.length > 0 && data.map((item, index) => (
                                    <Category
                                        key={index}
                                        image={item.image}
                                        text={item.title}
                                        onClick={onCategoryClick}
                                    />
                        ))}
                    </Slider>
                    <div onClick={() => sliderRef.current.slickNext()} className="next_category">
                        {svgIcons.arrowRight}
                    </div>
                </div>
            </div>
        </>
    )
}
