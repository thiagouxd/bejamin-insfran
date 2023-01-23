import Title from "components/Title";
import YoutubePlayer from "components/YoutubePlayer";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Image from "next/image";
import videos from "../../db/videos.json";
import s from "./styles.module.scss";
import Head from "next/head";

const amountOfPhotos = 100;
const data = Array.from({ length: amountOfPhotos }, (_, index) => index + 1);

const Gallery = () => {
  return (
    <>
      <Head>
        <title>Benjamin Insfran - Gallery</title>
      </Head>
      <section className={s.section}>
        <Title tag="h1">Photos</Title>

        <div className={s.galleryContainer}>
          <PhotoProvider>
            {data.map((item, index) => {
              const src = `/gallery/${item}-min.jpg`;
              return (
                <PhotoView key={index} src={src}>
                  <Image
                    width={0}
                    height={0}
                    className={s.galleryImage}
                    src={src}
                    alt=""
                  />
                </PhotoView>
              );
            })}
          </PhotoProvider>
        </div>
      </section>

      <section className={s.section}>
        <Title tag="h1">Videos</Title>

        <div className={s.videosContainer}>
          {videos.map((item, i) => {
            return (
              <div className={s.video} key={"videos" + i}>
                <YoutubePlayer codeVideo={item.code} />
                <legend>{item.legend}</legend>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
