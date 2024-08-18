import { fetchSVG } from "../store-AirBnB/svg/SvgStore";
import { MiniUserReview } from "./MiniUserReview";

export function ReviewsPreviewGridList({ reviewList }) {
  return (
    <div className='review-list grid'>
      {reviewList.slice(0,8).map((review) => (
        <MiniUserReview
          key={review.id}
          reviewerName={review.by.fullname}
          reviewDate={'Jan 2023'}
          review={review.txt}
        />
      ))}
    </div>
  );
}
