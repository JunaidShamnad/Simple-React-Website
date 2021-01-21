import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from "./pages/Home"
import About from './pages/About';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
      </Switch>
    </Router>
  );
}

export default App;
