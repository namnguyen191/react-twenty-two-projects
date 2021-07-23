import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './AppStyles.scss';
import { AppleNavbar } from './shared/components';

const InfinityScroll = React.lazy(
  () => import('./pages/Projects/InfinityScroll/InfinityScroll')
);
const Home = React.lazy(() => import('./pages/Home/Home'));
const JokeTeller = React.lazy(
  () => import('./pages/Projects/JokeTeller/JokeTeller')
);
const QuoteGenerator = React.lazy(
  () => import('./pages/Projects/QuoteGenerator/QuoteGenerator')
);
const PictureInPicture = React.lazy(
  () => import('./pages/Projects/PictureInPicture/PictureInPicture')
);
const LightAndDarkMode = React.lazy(
  () => import('./pages/Projects/LightAndDarkMode/LightAndDarkMode')
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
        <Route exact path="/project/light-and-dark">
          <LightAndDarkMode />
        </Route>
        <Route exact path={'/'}>
          <Home />
        </Route>
      </React.Suspense>
    </Router>
  );
};

export default App;
