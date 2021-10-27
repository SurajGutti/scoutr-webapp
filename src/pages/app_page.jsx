import React, { useEffect, useLayoutEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { Stopwatch } from "../components/Stopwatch"
import { Scores } from "../components/Scores";
import { EventsManager } from "../components/EventManager";
import { sendData } from "../utils/handlers/sendData";

import "../components/styles.css";

let sendState;

export const AppPage = () => {
    //Stopwatch hooks
    let [min, setMin] = useState(0);
    let [sec, setSec] = useState(0);
    let [mls, setMls] = useState(0);
    let [stop, setStop] = useState(true);

    //Score hooks
    let [homeScore, setHomeScore] = useState(0);
    let [awayScore, setAwayScore] = useState(0);

    //Event hooks
    let [homeTimeOut, toggleHomeTimeout] = useState(false);
    let [awayTimeOut, toggleAwayTimeout] = useState(false);
    let [homeEmptyGoal, toggleHomeEmptyGoal] = useState(false);
    let [awayEmptyGoal, toggleAwayEmptyGoal] = useState(false);

    let [updateState, setUpdateState] = useState(null);
    let [noData, setNoData] = useState(false);

    // const matchID = id.match.params.matchid;
    // console.log(matchID);
    const matchID = 986118;
    const history = useHistory();

    const redirect = () => {
        // clearInterval(sendState);
        history.push({
            pathname: `/`
        });
    }

    const postStatus = () => {
        sendData(parseInt(matchID), parseInt(min), parseInt(sec), stop,
            homeTimeOut, awayTimeOut, homeEmptyGoal, awayEmptyGoal).then(
            (resp) => {
                if (!resp){
                    console.log(`No data!`);
                    setNoData(true);
                } else {
                    console.dir(resp);
                    console.log(resp.data.status);
                    setNoData(false);
                }
            });
    }

    //Run every 2 seconds and 2 seconds only
    useEffect(() => {
        // clearInterval(sendState);
        console.log('useEffect called');
        sendState = setInterval(function() {
            try {
                postStatus();
            }
            catch (error){
                console.log(`One of the parameters is not an integer: ${error}`);
                setNoData(true);
            }
        }, 2000);
        return  () => {
            clearInterval(sendState);
        }
    }, [])

    //Run everytime any item in the dependency (deps:) array changes
    useLayoutEffect(() => {
        try{
            postStatus();
        }
        catch (error){
            setNoData(true);
        }
    }, [stop, homeScore, awayScore, homeTimeOut, awayTimeOut, homeEmptyGoal, awayEmptyGoal]);

    return(
        <div className={'backdrop'} style={{ textAlign:'center', height: '100vh'  }}>
            <div className={'ui sizer vertical segment'}>
                <div className={'ui animated button'} tabIndex="0" style={{
                    position:'absolute', left:'2rem', top:'1.5rem'}} onClick={redirect}>
                    <div className={"visible content"}>Back</div>
                    <div className={'hidden content'}>
                        <i className={'left arrow icon'}></i>
                    </div>
                </div>
                <div className={'mainheader'} style={{ paddingBottom: '1rem'}}>Scoutr</div>
                <div className={'sub'}>The free scouting app</div>
            </div>
            <div className={'error'} style={{ visibility: noData ? 'visible':'hidden' }}>No Data is being sent. Please ensure that the server is running!</div>
            <Scores scores={{ homeScore, awayScore, setHomeScore, setAwayScore}}/>
            <Stopwatch time={{ min, sec, mls, setMin, setSec, setMls, stop, setStop }} />
            <EventsManager events={{
                homeTimeOut, awayTimeOut, homeEmptyGoal, awayEmptyGoal,
                toggleHomeTimeout, toggleAwayTimeout, toggleHomeEmptyGoal, toggleAwayEmptyGoal
            }}/><hr/>
            </div>
        )
}