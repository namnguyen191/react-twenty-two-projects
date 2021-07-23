import { ChangeEvent, useEffect, useRef, useState } from 'react';
import './LightAndDarkModeStyles.scss';

const TITLE = process.env.REACT_APP_APP_NAME + ' - Light & Dark';

const LightAndDarkMode: React.FC = () => {
  const hostRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<'dark' | 'light'>('light');

  useEffect(() => {
    if (!hostRef || !hostRef.current) {
      throw new Error('Fail to set ref');
    }

    document.title = TITLE;

    const userPreviousMode = localStorage.getItem('mode');
    if (
      (userPreviousMode && userPreviousMode === 'light') ||
      userPreviousMode === 'dark'
    ) {
      setMode(userPreviousMode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const switchTheme = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setMode('dark');
      localStorage.setItem('mode', 'dark');
    } else {
      setMode('light');
      localStorage.setItem('mode', 'light');
    }
  };

  return (
    <div
      data-theme={mode}
      ref={hostRef}
      className="light-and-dark-mode-container"
    >
      {/* Dark Mode Switch */}
      <div className="theme-switch-wrapper">
        <span className="toggle-icon">
          <span className="toggle-text">Light Mode</span>
          <i className="fas fa-sun"></i>
        </span>
        <label className="theme-switch">
          <input
            type="checkbox"
            onChange={switchTheme}
            checked={mode === 'dark'}
          />
          <div className="slider round"></div>
        </label>
      </div>
      {/* Navigation */}
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#project">Project</a>
        <a href="#contact">Contact</a>
      </nav>
      {/* Home Section */}
      <section className="home" id="home">
        <div className="title-group">
          <h1>Light and Dark mode</h1>
          <h2>Welcome to my website!</h2>
        </div>
      </section>
      {/* About Section */}
      <section className="about" id="about">
        <h1>Undraw Illustrations</h1>
        <div className="about-container">
          <div className="image-container">
            <h2>Web Innovation</h2>
            <img
              src={
                process.env.REACT_APP_BASE_URL +
                `/images/light-and-dark/undraw_proud_coder_${mode}.svg`
              }
              alt="Proud Coder"
            />
          </div>
          <div className="image-container">
            <h2>Problem Solving</h2>
            <img
              src={
                process.env.REACT_APP_BASE_URL +
                `/images/light-and-dark/undraw_feeling_proud_${mode}.svg`
              }
              alt="Proud Coder"
            />
          </div>
          <div className="image-container">
            <h2>High Concept</h2>
            <img
              src={
                process.env.REACT_APP_BASE_URL +
                `/images/light-and-dark/undraw_conceptual_idea_${mode}.svg`
              }
              alt="Idea "
            />
          </div>
        </div>
      </section>
      {/* Project Section */}
      <section className="project" id="project">
        <h1>Buttons</h1>
        <div className="buttons">
          <button className="primary">Primary</button>
          <button className="secondary">Secondary</button>
          <button className="primary" disabled>
            Disabled
          </button>
          <button className="outline">Outline</button>
          <button className="secondary outline">Alt Outline</button>
          <button className="outline" disabled>
            Outline
          </button>
        </div>
        <div className="text-box">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quos
            vero, eos perspiciatis fugit aperiam non aliquam totam quasi impedit
            ex ab nostrum vel doloribus sapiente sed repellendus neque sint.
          </p>
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="social-icons">
          <i className="fab fa-github"></i>
          <i className="fab fa-codepen"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-medium"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </section>
    </div>
  );
};

export default LightAndDarkMode;
