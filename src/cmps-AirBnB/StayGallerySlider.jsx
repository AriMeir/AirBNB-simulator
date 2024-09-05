// import React, { useRef, useEffect } from 'react';
// import Slider from 'react-slick';
// import { svgIcons } from './Svgs';

// const Stay = ({ image }) => (
//     <section>
//         <div className="stay-img" style={{ backgroundImage: `url(${image})` }}></div>
//     </section>
// );

// export const StayGallerySlider = ({ data }) => {
//     const sliderRef = useRef(null);

//     const settings = {
//         arrows: false,
//         swipeToSlide: true,
//         infinite: true,
//         dots: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//     }

//     const handlePrevClick = event => {
//         event.stopPropagation();
//         if (sliderRef.current) {
//             sliderRef.current.slickPrev();
//         }
//     };

//     const handleNextClick = event => {
//         event.stopPropagation();
//         if (sliderRef.current) {
//             sliderRef.current.slickNext();
//         }
//     };

//     return (
//         <div className="slider-container">
//             <div onClick={handlePrevClick} className="prev_pic">
//                 {svgIcons.arrowLeft}
//             </div>
//             <Slider {...settings} ref={sliderRef}>
//                 {data?.map((item, index) => (
//                     <div key={index}>
//                         <Stay image={item.image} />
//                     </div>
//                 ))}
//             </Slider>
//             <div onClick={handleNextClick} className="next_pic">
//                 {svgIcons.arrowRight}
//             </div>
//         </div>
//     );
// }

import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import { svgIcons } from './Svgs';

const Stay = ({ image }) => (
    <section>
        <div className="stay-img" style={{ backgroundImage: `url(${image})` }}></div>
    </section>
);

export const StayGallerySlider = ({ data }) => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [canGoPrev, setCanGoPrev] = useState(false);
    const [canGoNext, setCanGoNext] = useState(true);

    const settings = {
        arrows: false,
        swipeToSlide: true,
        infinite: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (oldIndex, newIndex) => {
            setCurrentSlide(newIndex); // Update before the transition completes
        },
    };

    // Update the state to hide/show arrows based on the current slide
    useEffect(() => {
        setCanGoPrev(currentSlide > 0);
        setCanGoNext(currentSlide < data.length - 1);
    }, [currentSlide, data.length]);

    const handlePrevClick = event => {
        event.stopPropagation();
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const handleNextClick = event => {
        event.stopPropagation();
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    return (
        <div className="slider-container">
            {canGoPrev && (
                <div onClick={handlePrevClick} className="prev_pic">
                    {svgIcons.arrowLeft}
                </div>
            )}
            <Slider {...settings} ref={sliderRef}>
                {data?.map((item, index) => (
                    <div key={index}>
                        <Stay image={item.image} />
                    </div>
                ))}
            </Slider>
            {canGoNext && (
                <div onClick={handleNextClick} className="next_pic">
                    {svgIcons.arrowRight}
                </div>
            )}
        </div>
    );
};
