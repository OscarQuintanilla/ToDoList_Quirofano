import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Landing from './pages/Landing';
import SignUp from './pages/SignUp'
import Category from './pages/Category';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/signup" component={SignUp} />
          <Route path="/categories" component={Category} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
