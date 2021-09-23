import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from './context/themeContext';
import Home from './pages/Home'
import PetDetails from './pages/PetDetails'
import './App.css';
import Background from './component/Background';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/details/:id',
    component: PetDetails,
    exact: true,
  },
].map(({ path, component: Component, exact }) => (
  <Route path={path} key={path} exact={exact}>
    <Component />
  </Route>
));
function App() {
  return (
    <div className="font-inter">
      <ThemeProvider>
        <Background>
          <Router>
            <Switch>
              {routes}
              <Redirect to="/" />
            </Switch>
          </Router>
        </Background>
      </ThemeProvider>
    </div>
  );
}

export default App;
