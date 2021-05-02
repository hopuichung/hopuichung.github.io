import {
    Switch,
    Route
} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ResumePage from "./components/pages/ResumePage";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/resume">
                    <ResumePage />
                </Route>
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
