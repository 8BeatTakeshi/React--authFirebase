import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import PrivateHome from './Pages/PrivateHome/PrivateHome';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/loggedHome" component={PrivateHome} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
