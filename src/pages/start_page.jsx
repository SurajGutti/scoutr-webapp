import React, {Component, useEffect, useState} from "react";
import { useHistory } from 'react-router-dom';
import "../components/styles.css";

export const StartPage = () => {

    let [matchID, setMatchID] = useState(null);
    const history = useHistory();

    const redirect = () => {
        history.push({
            pathname: `/app`
            // pathname: `/app/${matchID}`,
        });
    }

    return(
        <div className={'homepage'}>
            <div className={'ui card'} style={{textAlign: 'center'}}>
                <div className={'content'}>
                    <div className={'mainheader'}>Scoutr</div></div>
                <div className={'extra content'}>
                    <div className={'ui large transparent left icon input'}>
                        <div className={'ui form'}>
                            <div className={'field'} style={{ paddingBottom: '2rem' }}>
                                <label>Enter Match ID to start scouting!</label>
                                <input type={'number'}
                                       onChange={(event) => setMatchID(event.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className={'ui animated button'} tabIndex="0" onClick={redirect}>
                        <div className={"visible content"}>Start Scouting!</div>
                        <div className={'hidden content'}>
                            <i className={'right arrow icon'}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}