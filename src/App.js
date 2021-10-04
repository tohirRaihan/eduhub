import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Error from './components/Error/Error';
import Blogs from './components/Blogs/Blogs';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/courses">
                        <Courses />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/blogs">
                        <Blogs />
                    </Route>
                    <Route path="*">
                        <Error />
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
