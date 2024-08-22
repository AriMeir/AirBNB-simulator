import { CategoryRatingChart } from "./CategoryRatingChart"
import { DashboardCard } from "./DashboardCard"
import { IncomeChart } from "./IncomeChart"
import { OrderStatusChart } from "./OrderStatusChart"
import { RatingChart } from "./RatingChart"
export function DashBoard() {
    return (
        <section className="dashboard-container grid">
            <h1 className="dashboard-title">DashBoard</h1>
            <div className="dashboard-display grid ">
                <div className="item1"><DashboardCard title={"Income"} number={3643} subtitle={"15 % since last month"}/></div>
                <div className="item2"><DashboardCard title={"Orders"} number={16} subtitle={"10 % since last month"}/></div>
                <div className="item3"><DashboardCard title={"Rating"} number={4.76} subtitle={"2 % since last month"}/></div>
                <div className="item4"><DashboardCard title={"In wish list"} number={4} subtitle={"-3 % since last month"}/></div>
                <div className="item5 dashboard-border"><IncomeChart/></div>
                <div className="item6 dashboard-border"><OrderStatusChart/></div>
                <div className="item7 dashboard-border"><CategoryRatingChart/></div>
                <div className="item8 dashboard-border"><RatingChart/></div>
                

            </div>
        </section >
    )
}

