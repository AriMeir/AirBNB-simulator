export function ReviewScoreBar({header, score}) {

    function width() {
        let width = score * 20;
        return `${width}%`;
    }
    return (
        <div className='review-score-container flex space-between align-center row'>
            <div className='review-parameter-header'>
                <p>{header}</p>
            </div>
            <div className='review-bar-and-score flex align-center row'>
                <div className='review-bar-out-of'>
                <div className='review-bar-score' style={{ width: width() }}></div>

                </div>
                <span className='score'>{score}</span>
            </div>
        </div>
    )
}

