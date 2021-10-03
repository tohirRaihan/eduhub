import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
    return <div className="App">
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    Home
                </Route>
                <Route exact path='/home'>
                    Home
                </Route>
                <Route exact path='/services'>
                    Services
                </Route>
                <Route exact path='/about'>
                    About
                </Route>
                <Route exact path='/blog'>
                    Blog
                </Route>
                <Route path='*'>
                    404 Not found
                </Route>
            </Switch>
        </BrowserRouter>
    </div>;
}

export default App;
