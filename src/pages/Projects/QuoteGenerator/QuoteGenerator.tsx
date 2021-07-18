import axios from 'axios';
import { useEffect, useState } from 'react';
import './QuoteGeneratorStyles.scss';

type Quote = {
  text: string;
  author: string;
};

type APIData = {
  loading: boolean;
  quote: Quote;
};

const TITLE = process.env.REACT_APP_APP_NAME + ' - Quote Generator';

const QuoteGenerator: React.FC = () => {
  const [data, setData] = useState<APIData>({
    loading: true,
    quote: { text: '', author: '' },
  });

  useEffect(() => {
    document.title = TITLE;
    getRandomQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getRandomQuote = async () => {
    const apiUrl = 'https://goquotes-api.herokuapp.com/api/v1/random?count=1';
    setData({ ...data, loading: true });
    const apiRes = await axios.get<{ status: string; quotes: Quote[] }>(apiUrl);

    const quote = apiRes.data.quotes[0];
    setTimeout(() => {
      setData({ ...data, loading: false, quote });
    }, 500);
  };

  const postToTwitter = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${data.quote.text}-${data.quote.text}`;
    window.open(tweetUrl, '_blank');
  };

  return (
    <div className="quote-generator-container">
      {data.loading ? (
        <div className="loading-container">
          <img
            src="/images/loading-simple-spinner-blue.svg"
            alt="Loading"
            className="loading"
          />
        </div>
      ) : (
        <div className="quote-container">
          {/* Quote */}
          <div
            className={
              'quote-text ' + (data.quote?.text.length > 70 ? 'long' : '')
            }
          >
            <i className="fas fa-quote-left" />
            <span className="quote">{data.quote?.text}</span>
          </div>

          {/* Author */}
          <div className="quote-author">
            <span className="author">{data.quote?.author}</span>
          </div>

          {/* Buttons */}
          <div className="btn-container">
            <button
              className="twitter-btn"
              title="Tweet This!"
              onClick={postToTwitter}
            >
              <i className="fab fa-twitter" />
            </button>
            <button className="new-quote-btn" onClick={() => getRandomQuote()}>
              New Quote
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuoteGenerator;
