import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from "history";
// import { Switch, Route} from 'react-router';
import { Router, Route, Switch } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';
import { Top } from './Top';

const hist = createBrowserHistory()

ReactDOM.render(
  <>
    <Router history={hist}>
      <div>
        <Top />
        <Switch>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </Switch>
      </div>
    </Router>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
