import s from "./styles.module.scss";

type Props = {
  codeVideo: string;
};

const YoutubePlayer = ({ codeVideo }: Props) => {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${codeVideo}?controls=0`}
      className={s.iframe}
      allow="autoplay"
      allowFullScreen
    ></iframe>
  );
};

export default YoutubePlayer;
