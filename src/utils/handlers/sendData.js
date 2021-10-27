import {convertTime, getDateTime, getLimit, penaltiesArray} from './calculators';

const axios = require('axios');

//Builds the data in the required format to be posted
const dataBuilder = async function (min, sec, stop, homeScore, awayScore, homeTimeOut, awayTimeOut, homeEmptyGoal, awayEmptyGoal,) {
    console.log(homeScore, awayScore);
    return {
        "mainClock": {
            "type": "main",
            "seconds": await convertTime(min, sec),
            "limit": await getLimit(min),
            "running": stop ? 0 : 1,
            "active": 1,
            "direction": 1
        },
        "penalties": penaltiesArray(),
        "score":{
            "type": "score",
            "scoreHome": homeScore,
            "scoreAway": awayScore
        },
        "teamTimeout":[
            {
                "type": 1,
                "active": homeTimeOut ? 1 : 0
            },{
                "type": 1,
                "active": awayTimeOut ? 1 : 0
            }
        ],
        "emptyGoal":[
            {
                "type": 1,
                "active": homeEmptyGoal ? 1 : 0
            },{
                "type": 1,
                "active": awayEmptyGoal ? 1 : 0
            }
        ]
    }
}

//Posts the data
const sendData = async function(matchID, min, sec, homeScore, awayScore, stop, homeTimeOut, awayTimeOut,
                                homeEmptyGoal, awayEmptyGoal) {
    try {
        console.log(homeScore, awayScore);
        const url = 'http://localhost:8080';
        const data = {
            matchId: parseInt(matchID),
            timestamp: await getDateTime(),
            data: await dataBuilder(min, sec, stop, homeScore, awayScore, homeTimeOut, awayTimeOut, homeEmptyGoal, awayEmptyGoal)
        }
        const response = await axios.post(url, data)
        // console.log('server response', response);
        return response;
    }
    catch (error){
        console.log(`Something went wrong! ${error}`);
        return null;
    }
};

// async function main(){
//     return await sendData();
// }

// main();

export { sendData };