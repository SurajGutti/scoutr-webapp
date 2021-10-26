import React, {useEffect, useState} from 'react';

export const Scores =({ scores: { homeScore, awayScore, setHomeScore, setAwayScore } }) => {
    return (
        <div style={{textAlign: `center`, marginTop: `100px`}}>
            <div className={"ui segment"}>
                <div className={"ui two column very relaxed grid"}>
                    <div className={"column"}>
                        <div className={"ui labeled input"}>
                            <div className={"ui blue horizontal label"}>Home</div>
                            <input id={'hScore'}
                                   type={'number'}
                                   min={'00'}
                                   max={'99'}
                                   style={{textAlign: 'center'}}
                                   value={homeScore}
                                   onChange={(event) => setHomeScore(+event.target.value)}/>
                        </div>
                    </div>
                    <div className={"column"}>
                        <div className={"ui labeled input"}>
                            <input id={'aScore'}
                                   type={'number'}
                                   min={'00'}
                                   max={'99'}
                                   style={{textAlign: 'center'}}
                                   value={awayScore}
                                   onChange={(event) => setAwayScore(+event.target.value)}/>
                            <div className="ui red horizontal label">Away</div>
                        </div>
                    </div>
                </div>
                <div className={"ui vertical divider"}>
                    VS
                </div>
            </div>
        </div>
    )
}

// export default Stopwatch;