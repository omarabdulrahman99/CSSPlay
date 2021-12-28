import logo from './logo.svg';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './home/Home';
import Center from './center/Center';
import Flexlove from './flexlove/Flexlove';

/* app.js whatnewtry*/
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/center" component={Center} />
          <Route path="/flexlove" component={Flexlove} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
