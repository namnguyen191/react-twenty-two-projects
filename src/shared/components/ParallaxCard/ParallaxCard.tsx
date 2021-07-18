import { useRef } from 'react';
import './ParallaxCardStyles.scss';

export type ParallaxCardProps = {
  /**
   * The title of the card, keep it short which will be an <h1> element
   */
  title: string;
  /**
   * The text paragraph, which will be a <p> element. Keep this short for best visual
   */
  text: string;
  /**
   * The url of the background image
   */
  imageUrl: string;
  /**
   * The width of the card in pixel. Default is 240
   */
  width?: number;
  /**
   * The height of the card in pixel. Default is 320
   */
  height?: number;
};

const ParallaxCard: React.FC<ParallaxCardProps> = (props) => {
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const cardBgRef = useRef<HTMLDivElement>(null);

  const { title, text, width = 240, height = 320, imageUrl } = props;

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (
      cardRef &&
      cardRef.current &&
      cardContainerRef &&
      cardContainerRef.current &&
      cardBgRef &&
      cardBgRef.current
    ) {
      const mouseX =
        (event.pageX - cardContainerRef.current.offsetLeft - width / 2) / width;
      const rX = mouseX * 30;
      const mouseY =
        (event.pageY - cardContainerRef.current.offsetTop - height / 2) /
        height;
      const rY = mouseY * -30;
      cardRef.current.style.transform = `rotateY(${rX}deg) rotateX(${rY}deg)`;

      const tX = mouseX * -40;
      const tY = mouseY * -40;
      cardBgRef.current.style.transform = `translateX(${tX}px) translateY(${tY}px)`;
    } else {
      return new Error('Element ref is not setting up correctly');
    }
  };

  const handleMouseLeave = () => {
    if (
      cardRef &&
      cardRef.current &&
      cardContainerRef &&
      cardContainerRef.current &&
      cardBgRef &&
      cardBgRef.current
    ) {
      cardRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
      cardBgRef.current.style.transform = `translateX(0px) translateY(0px)`;
    }
  };

  return (
    <div
      className="parallax-card-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardContainerRef}
    >
      <div
        className="card"
        ref={cardRef}
        style={{
          width: width + 'px',
          height: height + 'px',
        }}
      >
        <div
          className="card-bg"
          ref={cardBgRef}
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        ></div>
        <div className="card-info">
          <h1 className="title">{title}</h1>
          <p className="text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ParallaxCard;
