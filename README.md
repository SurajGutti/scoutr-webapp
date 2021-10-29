# Scouter WebApp

## Introduction

This simple web application scouts the events in a game of handball and sends the data back to the server every two 
seconds and also if there are any changes to the state. Changes to the state include:
- Goal scored
- Game timer stopped
- Empty goal started or ended
- Timeout started or ended

NOTE: Changes in the timer itself are NOT considered updates to the state and no data is sent during these events

For the sake of this project, I chose to keep the server directory separate from that of the webapp

## Running the webapp

### Requirements

Before attempting to run this solution, please make sure that yarn is installed in your computer.
- Install yarn ```npm install --global yarn```
- Once yarn is installed, install the required packages and dependencies by running the following command once in the 
project root and again in the server folder
  ```yarn install``` or ```yarn```

### How to Start

In the project root of the webapp, run the following command to start the webapp. I used the `Concurrently` package to 
start both the server and the webapp in sequence.

### `yarn scouter`

The webapp consists of 2 pages the main/landing page and the scouter app itself. The idea was to allow the user to type 
in a match ID and then start scouting. However, since the value of the matchID would be constant, I hard-coded this 
value. In case you are interested to see this in action, uncomment|comment the following:
- Line 11 in App.js|Line 10 in App.js
- Line 13 in start_page.jsx|Line 12 in start_page.jsx
- Line 32 in app_page.jsx|Line 34 in app_page.jsx

### Testing

Used Jest which is built in with react for unit testing the functions. There are only a few unit tests at the moment. I 
intend to fully cover all the areas with this. Enzyme is being used for testing components with snapshot testing

## Technical details

### Project Structure

The main webapp is built using react. I used function based react for this project since the main app is dependent on a 
multitude of parameters. The main state of the app is constantly changing and this use case can be handled better with 
hooks. This service runs on port `5000`.

As mentioned earlier, I used a separate backend component for a server. This is built with 
Express. The primary reason that I used a separate server is to circumvent the problem of the requests being blocked by 
CORS. The usual error that occurs is `Response to preflight request doesn't pass access control check`. I avoided this 
by using a proxy instead in addition to the cors plugin.

### Package Manager

#### Yarn

I used yarn as my package manager. Do **NOT**  use npm to run/install any dependencies since having the 
packaga-lock.json file might affect the app in unexpected, often adverse ways. In case you do this by mistake,
please remove the package-lock.json file and the node-modules folder and do a `yarn install` 

### List of additional Frameworks, Dependencies and Packages
- React
- Express
- Bootstrap 
- Axios 
- React-Router-Dom
- Concurrently
- Jest
- Enzyme

## Future Improvements

### The UI

The UI has been optimized as much as possible to run on mobile. However, some components can be further cleaned up.

### Testing

Although this would be something that I almost always add when I put in new code, I unfortunately did not have the time
to do this at this time.

#### Jest

Jest is being used to write tests for all the utility functions within the app. There are only 2 small unit tests at 
the moment. But I intend to write more test cases to cover all the functions

#### Enzyme

Snapshot testing is being done with enzyme.

***NOTE: This will be updated with more information***