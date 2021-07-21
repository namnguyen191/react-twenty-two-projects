import axios from 'axios';
import { useEffect, useRef } from 'react';
import './JokeTellerStyles.scss';

const TITLE = process.env.REACT_APP_APP_NAME + ' - Joke Teller';
const jokeAPIUrl = 'https://icanhazdadjoke.com/';

const JokeTeller: React.FC = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const jokeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = TITLE;
  });

  const tellAJoke = async () => {
    btnRef!.current!.disabled = true;

    let jokeString = 'No joke';

    try {
      const jokeRes = await axios.get<string>(jokeAPIUrl, {
        headers: {
          Accept: 'text/plain',
        },
      });

      jokeString = jokeRes.data;
    } catch (err) {
      console.log(err);
      jokeString = 'Sorry, fail to get you a joke, please try again later';
    }

    jokeRef!.current!.innerText = jokeString;
    let synth = window.speechSynthesis;
    let uterThis = new SpeechSynthesisUtterance(jokeString);
    uterThis.addEventListener('end', () => {
      btnRef!.current!.disabled = false;
    });
    synth.speak(uterThis);
  };

  return (
    <div className="joke-teller-container">
      <div
        style={{
          backgroundImage: `url(${process.env.REACT_APP_BASE_URL}/images/robot.gif)`,
        }}
        className="robot"
      >
        <div className="speech-bubble" ref={jokeRef}>
          Wanna hear a joke?
        </div>
      </div>
      <button onClick={tellAJoke} ref={btnRef}>
        Tell Me A Joke!
      </button>
    </div>
  );
};

export default JokeTeller;
