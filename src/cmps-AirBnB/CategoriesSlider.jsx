import Slider from "react-slick";
import { useRef } from "react";
import { svgIcons } from './Svgs';

const Category = ({ image, text, onClick }) => {
    return (
        <section className="category" onClick={() => onClick(text)}>
            <div className="bg-image-container" style={{ backgroundImage: `url(${image})` }}>
            </div>
            <div className="text-container"> {text} </div>
        </section>
    );
};

export const SliderComp = ({ data, onCategoryClick }) => {
    const sliderRef = useRef();

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
        ]
    }

    return (
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
    );
};

//new
// import Slider from "react-slick";
// import { useRef, useState, useEffect } from "react";
// import { svgIcons } from './Svgs';

// const Category = ({ image, text, onClick }) => {
//     return (
//         <section className="category" onClick={() => onClick(text)}>
//             <div className="bg-image-container" style={{ backgroundImage: `url(${image})` }}>
//             </div>
//             <div className="text-container"> {text} </div>
//         </section>
//     );
// };

// export const SliderComp = ({ data, onCategoryClick }) => {
//     const sliderRef = useRef(null);
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [canGoPrev, setCanGoPrev] = useState(false);
//     const [canGoNext, setCanGoNext] = useState(true);

//     const settings = {
//         arrows: false,
//         swipeToSlide: true,
//         infinite: false,
//         slidesToShow: 15,
//         slidesToScroll: 1,
//         responsive: [
//             {
//                 breakpoint: 1650,
//                 settings: { slidesToShow: 15 }
//             },
//             {
//                 breakpoint: 1024,
//                 settings: { slidesToShow: 10 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: { slidesToShow: 8 }
//             },
//             {
//                 breakpoint: 549,
//                 settings: { slidesToShow: 4 }
//             }
//         ],
//         beforeChange: (oldIndex, newIndex) => {
//             setCurrentSlide(newIndex); // Update before the transition completes
//         }
//     };

//     useEffect(() => {
//         setCanGoPrev(currentSlide > 0);
//         setCanGoNext(currentSlide < data.length - settings.slidesToShow);
//     }, [currentSlide, data.length, settings.slidesToShow]);

//     const handlePrevClick = () => {
//         if (sliderRef.current) {
//             sliderRef.current.slickPrev();
//         }
//     };

//     const handleNextClick = () => {
//         if (sliderRef.current) {
//             sliderRef.current.slickNext();
//         }
//     };

//     return (
//         <div className="categories main-content">
//             <div className="wrapper">
//                 {canGoPrev && (
//                     <div onClick={handlePrevClick} className="prev_category">
//                         {svgIcons.arrowLeft}
//                     </div>
//                 )}
//                 <Slider {...settings} ref={sliderRef}>
//                     {data?.map((item, index) => (
//                         <Category
//                             key={index}
//                             image={item.image}
//                             text={item.title}
//                             onClick={onCategoryClick}
//                         />
//                     ))}
//                 </Slider>
//                 {canGoNext && (
//                     <div onClick={handleNextClick} className="next_category">
//                         {svgIcons.arrowRight}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };
