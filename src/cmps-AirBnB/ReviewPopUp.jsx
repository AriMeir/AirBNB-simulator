import { MiniUserReview } from "./MiniUserReview"
export function ReviewPopUp({onClose}) {
    return (
        <div className="reviews-component flex column just-cont-start">
            <div>
                <button className="close-button-reviews-component x-btn" onClick={onClose}>X</button>
            </div>
            <div className="list-reviews-component flex column just-cont-start align-left ">
                        <MiniUserReview reviewerName={'Andrey'} reviewDate={'Jan 2023'} review={'This place was perfect for my family. We had plenty of room to spread out and the service could not'} />
                        <MiniUserReview reviewerName={'Kimberly'} reviewDate={'Jan 2023'} review={'We love Westin Kaanapalli'}/>
                        <MiniUserReview reviewerName={'Quentin'} reviewDate={'Jan 2023'} review={'I greatly appreciated both the location of the place (very central) and the appartment per se (clean and comfortable, with a very cosy room and with Wi-Fi). Nihat was perfect host, quite welcoming and helpful about places to go (or avoid) and things to do in town. Hosça kal!'}/>
                        <MiniUserReview reviewerName={'Jess'} reviewDate={'Jan 2023'} review={'We had a fantastic stay in this charming apartment. The location was perfect and Nihat welcomed us even when we made a late reservation and arrived early. He works at a bar no far from there- a great place to have a drink after seeing the sites! I highly recommend this place!'}/>
                        <MiniUserReview reviewerName={'Steve'} reviewDate={'Jan 2023'} review={'Nice room in a flat well located. Nihat is very nce and helpful. Good experience.'}/>
                        <MiniUserReview reviewerName={'Steve'} reviewDate={'Jan 2023'} review={'The flat is clean and and very good located, 3 minutes walk to Taksim Square. The bedroom is quiet at night, even though there is a crowded area next to the flat. Nihat was always extremely quick in answering our emails and let us feel comfortable. He is really kind and discrete, we met him few times cause he works in the evening.'}/>

            </div>

        
      </div>
    )
}

