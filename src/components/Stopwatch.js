import React, {useEffect, useState} from 'react';

export const Stopwatch = ({ time: { min, sec, mls, setMin, setSec, setMls, stop, setStop } }) => {
    const [resume, setResume] = useState(false);

    const onStart = () => {
        setStop(false);
    }

    const onResume = () => {
        // console.log(`SetStop: ${stop}`)
        setStop(false);
        setResume(true);
        setTimeout(function () {
            setResume(false);
        }, 500)
    }

    const onStop = () => {
        // console.log(`SetStop: ${stop}`)
        setStop(true);
    }

    const onReset = () => {
        setMin(0);
        setSec(0);
        setMls(0);
        setStop(true);
    }

    const set30 = () => {
        setMin(30);
        setSec(0);
        setMls(0);
    }

    const set60 = () => {
        setMin(60);
        setSec(0);
        setMls(0);
    }

    const set75 = () => {
        setMin(75);
        setSec(0);
        setMls(0);
    }

    useEffect(() => {
        let interval = null;
        if (!stop && (min < 90)){
            if (!resume)
                {
                    if ((min === 30 || min === 60 || min === 75 || min === 90) && sec === 0 && mls === 0) {
                        // console.log(`STOPPED!`);
                        onStop();
                    }
                }
            interval = setInterval(() => {
                if(sec > 59){
                    setMin(min+1);
                    setSec(0);
                    clearInterval(interval);
                }
                if(mls > 99){
                    // console.log(`Seconds:${sec}`);
                    setSec(sec+1);
                    setMls(0);
                    clearInterval(interval);
                }
                if(mls <= 99){
                    setMls(mls+1);
                }
            }, 10)
        }
        else{
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        }
    })

    // onUpdate({min,sec,mls})

    return(
        <div style={{textAlign: "center", marginTop: "50px", marginBottom: `50px`}}>
            <div>
                <h1>
                    {stop && (
                        (<div className={"ui transparent input"}>
                        <input id={'minutes'}
                               type={'number'}
                               min={'00'}
                               max={'89'}
                               style={{textAlign: 'center'}}
                               value={("0"+min).slice(-2)}
                               onChange={(event) => setMin(+event.target.value)}/> :
                        <input id={'seconds'}
                               type={'number'}
                               min={'00'}
                               max={'59'}
                               style={{textAlign: 'center'}}
                               value={("0"+sec).slice(-2)}
                               onChange={(event) => setSec(+event.target.value)}/> :
                        <input id={'millisecs'}
                               type={'number'}
                               min={'00'}
                               max={'99'}
                               style={{textAlign: 'center'}}
                               value={("0"+mls).slice(-2)}
                               onChange={(event) => setMls(+event.target.value)}/></div>))}
                    {!stop && (<div><span style={{textAlign: 'center'}}>{("0"+min).slice(-2)}</span> :
                        <span style={{textAlign: 'center'}}>{("0"+sec).slice(-2)}</span> :
                        <span style={{textAlign: 'center'}}>{("0"+mls).slice(-2)}</span></div>)}
                </h1>
                {stop && (min === 0) && (sec === 0) && (mls === 0) && (<div className={"ui icon buttons"}><button
                    className="ui button" onClick={onStart}><i className={"play icon"}></i></button></div>)}
                {stop && ((min !== 0) || (sec !== 0) || (mls !== 0)) && (
                    <div className={"ui icon buttons"}>
                        <button className={"ui button"} onClick={onResume}>
                            <i className="play circle outline icon"></i>
                        </button>
                    </div>
                    )}
                {!stop && (<div className={"ui icon buttons"} >
                    <button className={"ui button"} onClick={onStop}>
                        <i className="pause icon"></i>
                    </button>
                </div>)}
            </div><br/>
            <div className="ui buttons">
                <button className="ui button" onClick={onReset}>00</button>
                <button className="ui button" onClick={set30}>30</button>
                <button className="ui button" onClick={set60}>60</button>
                <button className="ui button" onClick={set75}>75</button>
            </div>
        </div>
    )
}

// export default Stopwatch;