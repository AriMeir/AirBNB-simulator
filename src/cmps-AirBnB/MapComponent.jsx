export function MapComponent({country, city}) {
    return (
        <div className='map flex column align-left pad-box border-bottom'>
        <h2>Where you'll be</h2>
        <div className='map-preview'>map</div>
        <h1 className='address text pad-box'>{country + ", " + city }</h1>
        <p>
        Lexington, Kentucky is the second-largest city in Kentucky next to Louisville, and is located in the heart of the Bluegrass region. Lexington is known as the "Horse Capital of the World," since it is home to the Kentucky Horse Park, Keeneland race course and the Red Mile race course.
        </p>
       
    </div>
    )
}

