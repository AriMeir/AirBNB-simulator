export function GuestCounter({header, subHeader, countUp, countDown, counter, lastOne}) {
    return (
        <div className={`guest-select-row pad-box  ${lastOne? '' : 'border-bottom'} flex space-between`}>
            <div className='guest-select-label'>
                <h4 className='guest-select-label-header'>{header}</h4>
                <h6 className='guest-select-label-sub-header'>{subHeader}</h6>    
            </div>
            <div className='counter-container flex row space-between'>
                <button className='decrease-button' onClick={countDown}>-</button>
                <p className='counter'>{counter}</p>
                <button className='increase-button' onClick={countUp}>+</button>
            </div>  
        </div>
    )
}

