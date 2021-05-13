import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Landing from './pages/Landing';
import SignUp from './pages/SignUp'
import Category from './pages/Category';
import Menu from './pages/Menu';
import List from './pages/Lista';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/categories" component={Category} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/lists" component={List} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
