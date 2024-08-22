export function DashboardCard({title, number, subtitle}) {
    return (
        <section className="dashboard-card-container border flex row center align-center">
            <div className="card-content flex column space-between align-left ">
                <h4>{title}</h4>
                <h1>{number}</h1>
                <p>{subtitle}</p>

            </div>
            
        </section >
    )
}

