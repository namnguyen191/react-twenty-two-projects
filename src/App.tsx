import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './AppStyles.scss';
import InfinityScroll from './pages/Projects/InfinityScroll/InfinityScroll';
import JokeTeller from './pages/Projects/JokeTeller/JokeTeller';
import PictureInPicture from './pages/Projects/PictureInPicture/PictureInPicture';
import { AppleNavbar } from './shared/components';

const Home = React.lazy(() => import('./pages/Home/Home'));
const QuoteGenerator = React.lazy(
  () => import('./pages/Projects/QuoteGenerator/QuoteGenerator')
);

const App: React.FC = () => {
  return (
    <Router basename={process.env.REACT_APP_BASE_URL}>
      <AppleNavbar>
        <Link to="/">Home</Link>
        <Link to="/">
          <i style={{ fontSize: '2.7rem' }} className="fab fa-github"></i>
        </Link>
      </AppleNavbar>
      <Switch>
        <React.Suspense fallback={<p>Loading</p>}>
          <Route exact path="/project/quote-generator">
            <QuoteGenerator />
          </Route>
          <Route exact path="/project/infinity-scroll">
            <InfinityScroll />
          </Route>
          <Route exact path="/project/picture-in-picture">
            <PictureInPicture />
          </Route>
          <Route exact path="/project/joke-teller">
            <JokeTeller />
          </Route>
          <Route exact path={'/'}>
            <Home />
          </Route>
        </React.Suspense>
      </Switch>
    </Router>
  );
};

export default App;
