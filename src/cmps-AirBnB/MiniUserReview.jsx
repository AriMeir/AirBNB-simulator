import {useEffect, useState } from "react"

export function MiniUserReview({reviewerName,reviewDate, review, imgUrl}) {
  
    
    const atLeastHundredyCharacters = review.length >= 150
    const [reviewPreview, setReviewPreview ] = useState(atLeastHundredyCharacters? cutReview(review) : review) 
    const [showMoreToggle, setShowMoreToggle] = useState(false)

    function cutReview(review) {
        return review.substring(0, 150) + '...';
      }
    function onShowMore() {
        setShowMoreToggle(true)
        setReviewPreview(review)
    }
    function onShowLess() {
        setShowMoreToggle(false)
        setReviewPreview(cutReview(review))
    }
    
    return (
        <div className='review-prev flex column '>
            <div className='mini-user-details flex row align-left'>
                <div className="mini-user-img"><img src={imgUrl}/></div>
                <div className="mini-user-name-date flex column align-left">
                    <h6>{reviewerName}</h6>
                    <span>{reviewDate}</span>
                </div>
                
            </div>
            <div className="review-text">
                <p>{reviewPreview}</p>
            </div>
            <div className="show-more-less">
                {!showMoreToggle && atLeastHundredyCharacters && (<><span className="show-more underline" onClick={onShowMore}>show more</span> <span>{' >'}</span></>)}
                {showMoreToggle && atLeastHundredyCharacters && (<><span>{'< '}</span> <span className="show-less underline" onClick={onShowLess}>show less</span></>)}

            </div>

            </div>
    )
}

