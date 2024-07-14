// import React from 'react';
// import { useEffect, useState } from 'react';
// import { unitTestReducer } from '../store-AirBnB/reducers/stay.reducer'
// import { useSelector } from 'react-redux';
// import { loadStays, loadStay, addStay, updateStay, removeStay } from '../store-AirBnB/actions/stay.actions';
// import { stayService } from '../services-AirBnB/stay.service';
// import { svgIcons } from './Svgs';
// // import SvgIcon from './SvgIcon';

// export function StayPreview({ stay, onClick, onHeartClick}) {
//     const [isHeartPressed, setIsHeartPressed] = useState(false);

//     const handleHeartClick = (e) => {
//         e.stopPropagation();
//         setIsHeartPressed(!isHeartPressed);
//         if (onHeartClick) onHeartClick();
//     };

//     return (
//         <div className='stay-preview' onClick={onClick}>
//             <div className='card-top full'>
//                 <img className='stay-img' src={stay.imgUrls[0]} alt={stay.name} />
//                 <div className={`heart-icon ${isHeartPressed ? 'pressed' : ''}`} onClick={handleHeartClick}>
//                     {/* <SvgIcon iconName={'heart'} /> */}
//                     {svgIcons.heart}
//                 </div>
//             </div>
//             <div className='card-bottom full'>
//                 <div className='card-header'>
//                     <h1>Barcelona, Spain</h1>
//                     {/* <SvgIcon iconName={'starReview'} className='star-reviews'/><p>4.8</p> */}
//                     <div className='star-reviews'>{svgIcons.starReview} 4.8</div>
//                 </div>
//                 <p>5000 kilometers away</p>
//                 <p>May 23 - Sep 1</p>
//                 <p>$200 night</p>
//             </div>
//         </div>
//     )
// }


import React from 'react';
import { useEffect, useState } from 'react';
import { unitTestReducer } from '../store-AirBnB/reducers/stay.reducer'
import { useSelector } from 'react-redux';
import { loadStays, loadStay, addStay, updateStay, removeStay } from '../store-AirBnB/actions/stay.actions';
import { stayService } from '../services-AirBnB/stay.service';
import { svgIcons } from './Svgs';
// import SvgIcon from './SvgIcon';
import { StayGallerySlider } from "./StayGallerySlider";

const StayGallery = [
    {
        title: "StayImg1",
        image: "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/venice-beach_final-768x512.jpg"
    },
    {
        title: "StayImg2",
        image: "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/ia_0444_city-header_milan_marianna-tomaselli-768x432.jpg"
    },
    {
        title: "StayImg3",
        image: "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/ia_0378_hong-kong_jisu-choi_final_header-1-768x512.jpg"
    }
]


export function StayPreview({ stay, onClick, onHeartClick}) {
    const [isHeartPressed, setIsHeartPressed] = useState(false);

    const handleHeartClick = (e) => {
        e.stopPropagation();
        setIsHeartPressed(!isHeartPressed);
        if (onHeartClick) onHeartClick();
    };

    return (
        <div className='stay-preview' onClick={onClick}>
            <div className='card-top full'>
                {/* <StayGallerySlider
                    data={StayGallery}
                    slideNum={1}
                /> */}
                <img className='stay-img' src={stay.imgUrls[0]} alt={stay.name} />
                <div className={`heart-icon ${isHeartPressed ? 'pressed' : ''}`} onClick={handleHeartClick}>
                    {/* <SvgIcon iconName={'heart'} /> */}
                    {svgIcons.heart}
                </div>
            </div>
            <div className='card-bottom full'>
                <div className='card-header'>
                    <h1>Barcelona, Spain</h1>
                    {/* <SvgIcon iconName={'starReview'} className='star-reviews'/><p>4.8</p> */}
                    <div className='star-reviews'>{svgIcons.starReview} 4.8</div>
                </div>
                <p>5000 kilometers away</p>
                <p>May 23 - Sep 1</p>
                <p>$200 night</p>
            </div>
        </div>
    )
}
