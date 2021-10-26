import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { AppPage } from "./pages/app_page";
import { StartPage } from "./pages/start_page";

function App() {
  return (
    <BrowserRouter>
        <Route exact path={"/"} component={StartPage} />
        <Route exact path={"/app/"} component={AppPage}/>
        {/*<Route exact path={"/app/:matchid"} component={AppPage}/>*/}
    </BrowserRouter>
  );
}

export default App;
