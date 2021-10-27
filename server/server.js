const express = require('express');
const axios = require("axios");
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/', async (req, res) => {
    console.log(req.body);
    const { matchId, timestamp, data } = req.body;
    console.log(JSON.stringify(data));
    const status = await sendData({ matchId, timestamp, data });
    res.json({status, matchId, timestamp, body: req.body})
});


app.listen(8080);

const sendData = async function({matchId, timestamp, data}){
    const url = `http://85.214.74.245:9111/hblclock`;

    const payload = JSON.stringify({
        matchId,
        timestamp,
        data
    });
    // console.log(`Using current date on server: ${currentDate.toString()}`);
    try{
        console.log(`Sending data to ${url}`);
        console.log(`Sending Data: ${JSON.stringify(data)}`);
        const response = await axios.post(url, payload, {
            headers: {'Access-Control-Allow-Origin': '*'},
            auth : {
                username: 'skyAssignment',
                password: 'p0wer_overWhelm1ng'}
        });
        const { status } = response.data;
        console.log(`Status: ${status}`);
        // console.log(`data: ${resp}`);
        return status;
    }
    catch (error){
        console.log(error);
        return null;
    }
}