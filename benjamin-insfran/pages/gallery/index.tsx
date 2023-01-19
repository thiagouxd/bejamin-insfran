import Title from "components/Title";
import YoutubePlayer from "components/YoutubePlayer";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Image from "next/image";
import data from "../../db/gallery.json";
import s from "./styles.module.scss";

const Gallery = () => {
  return (
    <>
      <section className={s.section}>
        <Title tag="h1">Photos</Title>

        <div className={s.galleryContainer}>
          <PhotoProvider>
            {data.map((item, index) => (
              <PhotoView key={index} src={item}>
                <Image
                  width={0}
                  height={0}
                  className={s.galleryImage}
                  src={item}
                  alt=""
                />
              </PhotoView>
            ))}
          </PhotoProvider>
        </div>
      </section>

      <section className={s.section}>
        <Title tag="h1">Videos</Title>

        <div className={s.videosContainer}>
          <YoutubePlayer codeVideo="zFT9hpQ5VUo" />
          <YoutubePlayer codeVideo="3PGfIc6ra2I" />
          <YoutubePlayer codeVideo="zFT9hpQ5VUo" />
          <YoutubePlayer codeVideo="3PGfIc6ra2I" />
          <YoutubePlayer codeVideo="zFT9hpQ5VUo" />
          <YoutubePlayer codeVideo="3PGfIc6ra2I" />
        </div>
      </section>
    </>
  );
};

export default Gallery;
