export function DashboardCard({title, number, subtitle}) {
    return (
        <section className="dashboard-card-container border flex row center align-center">
            <div className="card-content flex column space-between align-left ">
                <h1>{title}</h1>
                <h2>{number}</h2>
                <p>{subtitle}</p>

            </div>

        </section >
    )
}
