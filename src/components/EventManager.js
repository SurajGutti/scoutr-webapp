import React from 'react';

export const EventsManager =({
    events: {homeTimeOut, awayTimeOut, homeEmptyGoal, awayEmptyGoal,
                toggleHomeTimeout, toggleAwayTimeout,
                toggleHomeEmptyGoal, toggleAwayEmptyGoal}}) => {

    return (
        <div className="ui segment">
            <div className="ui two column very relaxed grid">
                <div className="column">
                    <div className="ui card" style={{ left: '25%', position: 'relative', width:'inherit'}}>
                        <div className="content">
                            <div className="header">Timeout</div>
                            <div className="meta">Home</div>
                                <input id={'homeTimeOut'} type="checkbox" checked={Boolean(homeTimeOut)}
                                       onChange={(event) => toggleHomeTimeout(event.target.checked)}/>
                            <div className="meta">Away</div>
                            <input id={'awayTimeOut'} type="checkbox" checked={Boolean(awayTimeOut)}
                                   onChange={(event) => toggleAwayTimeout(event.target.checked)}/>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="ui card" style={{ left: '25%', position: 'relative', width:'inherit'}}>
                        <div className="content">
                            <div className="header">Empty Goal</div>
                            <div className="meta">Home</div>
                            <input id={'homeEmptyGoal'} type="checkbox" checked={Boolean(homeEmptyGoal)}
                                   onChange={(event) => toggleHomeEmptyGoal(event.target.checked)}/>
                            <div className="meta">Away</div>
                            <input id={'awayEmptyGoal'} type="checkbox" checked={Boolean(awayEmptyGoal)}
                                   onChange={(event) => toggleAwayEmptyGoal(event.target.checked)}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ui vertical divider">EVENTS</div>
        </div>
    )
}

// export default Stopwatch;