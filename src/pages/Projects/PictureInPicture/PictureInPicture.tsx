import { MouseEvent, useEffect, useRef } from 'react';
import './PictureInPictureStyles.scss';

const TITLE = process.env.REACT_APP_APP_NAME + ' - Picture in Picture';

const PictureInPicture: React.FC = () => {
  const vidEleRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.title = TITLE;
    selectMediaStream();
  });

  const selectMediaStream = async () => {
    try {
      const mediaStream = await (
        navigator.mediaDevices as any
      ).getDisplayMedia();

      if (vidEleRef && vidEleRef.current) {
        const vidEle = vidEleRef.current;
        vidEle.srcObject = mediaStream;
        vidEle.onloadedmetadata = () => {
          vidEle.play();
        };
      }
    } catch (err) {}
  };

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    const btn = e.target as HTMLButtonElement;

    btn.disabled = true;

    if (vidEleRef && vidEleRef.current) {
      await (vidEleRef.current as any).requestPictureInPicture();
      btn.disabled = false;
      vidEleRef.current.hidden = true;
    }
  };

  return (
    <div className="picture-in-picture-container">
      {/* Video */}
      <video src="" controls height="360" width="640" ref={vidEleRef}></video>

      {/* Button */}
      <div className="btn-container">
        <button onClick={handleClick}>Start</button>
      </div>
    </div>
  );
};

export default PictureInPicture;
