import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Feed from './component/Feed';
import Header from './component/Header';
import UserFeed from './component/UserFeed';


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Switch>
        <Route path="/" exact component={Feed} />
        <Route path="/user/:username" component={UserFeed} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
