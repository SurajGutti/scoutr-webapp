
const convertTime = async function(minutes, seconds){
    // console.log(`mainclock seconds: ${min2sec}`);
    return (minutes * 60) + seconds;
}

const getLimit = async function(min){
    if (min < 30) return 1800;
    else if ( min >= 30 && min < 60) return 3600;
    else if ( min >= 60 && min < 75) return 4500;
    else return 5400;
}

const getDateTime = async function (){
    const now = new Date();
    const date = `${now.getDate()}-${(now.getMonth() + 1)}-${now.getFullYear()}`;
    const time = `${("0"+now.getHours()).slice(-2)}:${("0"+now.getMinutes()).slice(-2)}:${("0"+now.getSeconds()).slice(-2)}:${("0"+now.getMilliseconds()).slice(-3)}`;
    return (date + ' ' + time);
}

const penaltiesArray = function(){
    return [
        {
            "type": 1,
            "seconds": 200,
            "limit": 0,
            "running": 0,
            "active": 0,
            "direction": -1
        },
        {
            "type": 2,
            "seconds": 200,
            "limit": 0,
            "running": 0,
            "active": 0,
            "direction": -1
        },
        {
            "type": 3,
            "seconds": 200,
            "limit": 0,
            "running": 0,
            "active": 0,
            "direction": -1
        },
        {
            "type": 4,
            "seconds": 200,
            "limit": 0,
            "running": 0,
            "active": 0,
            "direction": -1
        },
        {
            "type": 5,
            "seconds": 200,
            "limit": 0,
            "running": 0,
            "active": 0,
            "direction": -1
        },
        {
            "type": 6,
            "seconds": 200,
            "limit": 0,
            "running": 0,
            "active": 0,
            "direction": -1
        }
    ]
}

export { convertTime, getLimit, getDateTime, penaltiesArray };