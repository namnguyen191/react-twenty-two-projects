import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ParallaxCard } from '../../shared/components';
import './HomeStyles.scss';

const TITLE = process.env.REACT_APP_APP_NAME ?? 'Error getting appname';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = TITLE;
  });

  return (
    <div className="home-container">
      <Link to="/project/quote-generator">
        <ParallaxCard
          title="Quote Generator"
          text="Stealing quote is how I got my degree"
          imageUrl={
            process.env.REACT_APP_BASE_URL +
            '/images/quote-generator-card-bg.jpg'
          }
        />
      </Link>
      <Link to="/project/infinity-scroll">
        <ParallaxCard
          title="Infinity Scroll"
          text="For people who have unlimited data (and too much time)"
          imageUrl={
            process.env.REACT_APP_BASE_URL +
            '/images/infinity-scroll-card-bg.jpeg'
          }
        />
      </Link>
      <Link to="/project/picture-in-picture">
        <ParallaxCard
          title="Picture in Picture"
          text="It's Picturception"
          imageUrl={
            process.env.REACT_APP_BASE_URL +
            '/images/picture-in-picture-card-bg.jpeg'
          }
        />
      </Link>
    </div>
  );
};

export default Home;
