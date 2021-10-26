import React, {Component, useEffect, useState} from "react";
import { useHistory } from 'react-router-dom';
import { Stopwatch } from "../components/Stopwatch"
import { Scores } from "../components/Scores";
import { EventsManager } from "../components/EventManager";
import { sendData } from "../utils/handlers/sendData";

import "../components/styles.css";
let sendState;

export const AppPage = (id) => {
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

    let [response, setResponse] = useState(null);

    // const matchID = id.match.params.matchid;
    // console.log(matchID);
    const matchID = 986118;
    const history = useHistory();

    const redirect = () => {
        history.push({
            pathname: `/`
        });
    }

    //Run every 2 seconds and 2 seconds only
    useEffect(() => {
        clearInterval(sendState);
        console.log('useEffect called');
        sendState = setInterval(function() {
            try {
                sendData(parseInt(matchID), parseInt(min), parseInt(sec), stop,
                    homeTimeOut, awayTimeOut, homeEmptyGoal, awayEmptyGoal);
            }
            catch (error){
                console.log(`One of the parameters is not an integer: ${error}`);
            }
        }, 2000);
    }, [])

    //Run everytime any item in the dependency (deps:) array changes
    useEffect(() => {
        try{
            sendState = sendData(parseInt(matchID), parseInt(min), parseInt(sec), stop,
                homeTimeOut, awayTimeOut, homeEmptyGoal, awayEmptyGoal);
            sendState.then((resp) => { setResponse(resp) });
            console.log(response, response.status, typeof response.status);
            if (!response || !response.data.status || response.data.status !== 10){
                console.log(`No data!`);
            }
        }
        catch (error){
            console.log(`One of the parameters is not an integer: ${error}`);
        }
    }, [stop, homeScore, awayScore, homeTimeOut, awayTimeOut, homeEmptyGoal, awayEmptyGoal]);

    return(
        <div className={'backdrop'} style={{ textAlign:'center' }}>
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
            <Scores scores={{ homeScore, awayScore, setHomeScore, setAwayScore}}/>
            <Stopwatch time={{ min, sec, mls, setMin, setSec, setMls, stop, setStop }} />
            <EventsManager events={{
                homeTimeOut, awayTimeOut, homeEmptyGoal, awayEmptyGoal,
                toggleHomeTimeout, toggleAwayTimeout, toggleHomeEmptyGoal, toggleAwayEmptyGoal
            }}/><hr/>
            </div>
        )
}