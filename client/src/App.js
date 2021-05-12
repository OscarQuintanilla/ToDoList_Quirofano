import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Landing from './pages/Landing';
import SignUp from './pages/SignUp'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
