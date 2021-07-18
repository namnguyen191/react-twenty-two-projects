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
          imageUrl="/images/quote-generator-card-bg.jpg"
        />
      </Link>
      <Link to="/project/quote-generator">
        <ParallaxCard
          title="Quote Generator"
          text="Stealing quote is how I got my degree"
          imageUrl="/images/quote-generator-card-bg.jpg"
        />
      </Link>
      <Link to="/project/quote-generator">
        <ParallaxCard
          title="Quote Generator"
          text="Stealing quote is how I got my degree"
          imageUrl="/images/quote-generator-card-bg.jpg"
        />
      </Link>
    </div>
  );
};

export default Home;
