import { Header } from "../cmps-AirBnB/Header"
import { useNavigate } from "react-router"
import { useParams } from "react-router"
export function ConfirmationPage() {
    const {stayId} = useParams()
    const navigate = useNavigate()
    return (
        <section>
            
            <div className="confirmation-title border"><div  onClick={() => {navigate(`/stay/${stayId}`)}}>{'<'}</div> Request to book</div>
            <div className="details-login-price flex space-between">
                <div className="details-login">
                    <div className="final-details border"> trip details</div>
                    <div className="final-details border"> login</div>
                </div>
                <div className="price-container border">
                    <div className="final price"> price</div>  
                </div>
            </div>
        </section >
    )
}

