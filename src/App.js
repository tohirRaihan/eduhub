import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';

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
                    <Route exact path="/services">
                        <Services />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/blog">
                        Blog
                    </Route>
                    <Route path="*">404 Not found</Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
