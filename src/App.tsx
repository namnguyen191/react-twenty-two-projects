import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './AppStyles.scss';
import InfinityScroll from './pages/Projects/InfinityScroll/InfinityScroll';
import { AppleNavbar } from './shared/components';

const Home = React.lazy(() => import('./pages/Home/Home'));
const QuoteGenerator = React.lazy(
  () => import('./pages/Projects/QuoteGenerator/QuoteGenerator')
);

const App: React.FC = () => {
  return (
    <Router>
      <AppleNavbar>
        <Link to="/">Home</Link>
        <Link to="/">
          <i style={{ fontSize: '2.7rem' }} className="fab fa-github"></i>
        </Link>
      </AppleNavbar>
      <Switch>
        <React.Suspense fallback={<p>Loading</p>}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/project/quote-generator">
            <QuoteGenerator />
          </Route>
          <Route path="/project/infinity-scroll">
            <InfinityScroll />
          </Route>
        </React.Suspense>
      </Switch>
    </Router>
  );
};

export default App;
