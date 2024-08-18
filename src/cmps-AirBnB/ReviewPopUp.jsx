import { MiniUserReview } from "./MiniUserReview";

export function ReviewPopUp({ onClose, reviewList }) {
  return (
    <div className="reviews-component flex column just-cont-start">
      <div>
        <button className="close-button-reviews-component x-btn" onClick={onClose}>X</button>
      </div>
      <div className="list-reviews-component flex column just-cont-start align-left">
        {reviewList.map(review => (
          <MiniUserReview
            key={review.id}
            reviewerName={review.by.fullname}
            reviewDate={'Jan 2023'} 
            review={review.txt}
          />
        ))}
      </div>
    </div>
  );
}
