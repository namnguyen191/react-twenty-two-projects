import axios from 'axios';
import { ReactElement, useEffect, useRef, useState } from 'react';
import './InfinityScrollStyles.scss';

type Photo = {
  alt_description: string;
  urls: { regular: string };
  links: { html: string };
};

const TITLE = process.env.REACT_APP_APP_NAME + ' - Infinity Scroll';

const InfinityScroll: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const loading = useRef<boolean>(false);
  const imageQueue = useRef<number>(0);

  const unsplashAPIUrl = 'https://api.unsplash.com';
  const photoCount = 10;
  const apiKey = '4xDG69iCRcPnbgDOKIH7qbERYgRwFpaaJhFH1m4bOjk';

  const getPhotos = async () => {
    console.log('Trigger getting photos');

    loading.current = true;
    const res = await axios.get<Photo[]>(
      `${unsplashAPIUrl}/photos/random?client_id=${apiKey}&count=${photoCount}`
    );

    loading.current = false;
    imageQueue.current += res.data.length;
    setPhotos((curPhotos) => [...curPhotos, ...res.data]);
  };

  const loadMoreImage = () => {
    if (
      window.scrollY > document.body.offsetHeight - 1000 &&
      !loading.current &&
      imageQueue.current === 0
    ) {
      getPhotos();
    }
  };

  const activateInfiniteScroll = () => {
    window.addEventListener('scroll', loadMoreImage);
  };

  useEffect(() => {
    document.title = TITLE;

    getPhotos();

    activateInfiniteScroll();

    return () => {
      window.removeEventListener('scroll', loadMoreImage);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderImages = (): ReactElement[] => {
    let imagesNodes: ReactElement[] = [];

    for (let i = 0; i < photos.length; i++) {
      imagesNodes.push(
        <a key={i} href={photos[i].links.html} target="_blank" rel="noreferrer">
          <img
            src={photos[i].urls.regular}
            alt={photos[i].alt_description}
            title={photos[i].alt_description}
            // eslint-disable-next-line no-loop-func
            onLoad={() => {
              imageQueue.current -= 1;
            }}
          />
        </a>
      );
    }

    return imagesNodes;
  };

  return (
    <div className="infinity-scroll-container">
      <h1>Unsplash API - Infinite Scroll</h1>
      <div className="img-container">{renderImages()}</div>
      <img
        src={process.env.REACT_APP_BASE_URL + '/images/loading-infinity.svg'}
        alt="Loader Icon"
      />
    </div>
  );
};

export default InfinityScroll;
