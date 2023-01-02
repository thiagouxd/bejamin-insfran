import Title from "../components/Title";
import YoutubePlayer from "../components/YoutubePlayer";

const Gallery = () => {
  return (
    <>
      <Title tag="h2">Gallery Photos</Title>
      <div>Lista de fotos aqui</div>

      <Title tag="h2">Videos</Title>
      <div>Lista de vídeos</div>

      <YoutubePlayer codeVideo="zFT9hpQ5VUo" />
      <YoutubePlayer codeVideo="3PGfIc6ra2I" />
    </>
  );
};

export default Gallery;
