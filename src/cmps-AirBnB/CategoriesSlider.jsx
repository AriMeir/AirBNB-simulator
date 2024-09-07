import Slider from "react-slick";
import { useRef, useState, useEffect } from "react";
import { svgIcons } from './Svgs';

const Category = ({ image, text, onClick, isSelected }) => {
    return (
        <section className={`category ${isSelected ? 'selected' : ''}`} onClick={() => onClick(text)}>
            <div className="bg-image-container" style={{ backgroundImage: `url(${image})` }}>
            </div>
            <div className="text-container"> {text} </div>
        </section>
    )
}

export const CategoriesSlider = ({ data, onCategoryClick }) => {
    const sliderRef = useRef(null);
    const [currentCategory, setCurrentCategory] = useState(0)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [canGoPrev, setCanGoPrev] = useState(false)
    const [canGoNext, setCanGoNext] = useState(true)

    const settings = {
        arrows: false,
        swipeToSlide: true,
        infinite: false,
        slidesToShow: 15,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1650,
                settings: { slidesToShow: 15 }
            },
            {
                breakpoint: 1024,
                settings: { slidesToShow: 10 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 8 }
            },
            {
                breakpoint: 549,
                settings: { slidesToShow: 4 }
            }
        ],
        beforeChange: (oldIndex, newIndex) => {
            setCurrentCategory(newIndex)
        }
    }

    useEffect(() => {
        setCanGoPrev(currentCategory > 0)
        setCanGoNext(currentCategory < 5)
    }, [currentCategory, data.length]);

    const handlePrevClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev()
        }
    };

    const handleNextClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext()
        }
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category)
        onCategoryClick(category)
    }

    return (
        <div className="categories main-content">
            <div className="wrapper">
                {canGoPrev && (
                    <div onClick={handlePrevClick} className="prev_category">
                        {svgIcons.arrowLeft}
                    </div>
                )}
                <Slider {...settings} ref={sliderRef}>
                    {data?.map((item, index) => (
                        <Category
                            key={index}
                            image={item.image}
                            text={item.title}
                            onClick={handleCategoryClick}
                            isSelected={selectedCategory === item.title}
                        />
                    ))}
                </Slider>
                {canGoNext && (
                    <div onClick={handleNextClick} className="next_category">
                        {svgIcons.arrowRight}
                    </div>
                )}
            </div>
        </div>
    )
}
