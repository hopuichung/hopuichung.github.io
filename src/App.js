import {
    Switch,
    Route
} from "react-router-dom";
import withRoot from "./modules/withRoot";
import HomePage from "./modules/components/HomePage";
import ResumePage from "./modules/components/ResumePage";

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

export default withRoot(App);
