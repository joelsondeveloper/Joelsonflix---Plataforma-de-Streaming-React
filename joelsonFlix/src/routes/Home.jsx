import { useEffect, useState, useRef } from "react";
import { getTypeMovies } from "../services/tmbd";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

import Carousel from "../components/Carousel";

import styles from "./Home.module.css";

const Home = () => {
  const containerRef = useRef(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTv, setTrendingTv] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const movies = await getTypeMovies("/trending/movie/week");
      const tv = await getTypeMovies("/trending/tv/week");
      const moviesNowPlaying = await getTypeMovies("/movie/now_playing");
      const tvOnTheAir = await getTypeMovies("/tv/on_the_air");
      const moviesTopRated = await getTypeMovies("/movie/top_rated");
      const tvTopRated = await getTypeMovies("/tv/top_rated");

      setTrendingMovies(movies);
      setTrendingTv(tv);
      setNowPlaying(joinAndSuffle(moviesNowPlaying, tvOnTheAir));
      setTopRated(joinAndSuffle(moviesTopRated, tvTopRated));
    };
    fetchTrendingMovies();
  }, []);

  const joinAndSuffle = (array1, array2) => {
    const joinedArray = [...array1, ...array2];
    return joinedArray.sort(() => Math.random() - 0.5);
  };

  const nextSlide = () => {
    setCarouselIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % 5;

      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(-${
          100 * nextIndex
        }%)`;
      }

      return nextIndex;
    });
  };

  const alterSlide = (index) => {
    setCarouselIndex(index);

    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(-${100 * index}%)`;
    }
  };

  // nextSlide();

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval); // limpa quando desmontar
  }, []);

  return (
    <>
      <section className={styles["hero-carousel"]}>
        <div className={styles["hero-carousel-container"]} ref={containerRef}>
          {trendingMovies.slice(0, 5).map((movie) => (
            <div
              className={styles["hero-carousel-item"]}
              key={movie.id}
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w780${movie.backdrop_path})`,
              }}
            >
              <div className={styles["hero-carousel-info"]}>
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
                <div className={styles["hero-carousel-buttons"]}>
                  <button className={styles["btn-primary"]}>
                    <FaPlay />
                    <span>Assistir Agora</span>
                  </button>
                  <button className={styles["btn-secondary"]}>
                    <FaInfoCircle />
                    <span>Ver Mais</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles["hero-carousel-control"]}>
          {trendingMovies.slice(0, 5).map((dot, index) => (
            <span
              key={index}
              className={index === carouselIndex ? styles["active"] : ""}
              onClick={() => alterSlide(index)}
            ></span>
          ))}
        </div>
      </section>
      <div className={styles["carousels-container"]}>
        <Carousel
          itemData={trendingMovies}
          title="Filmes Populares"
          qtdItens={15}
        />
        <Carousel itemData={trendingTv} title="Séries Em Alta" qtdItens={15} />
        <Carousel
          itemData={nowPlaying}
          title="Lançados rencentemente"
          qtdItens={15}
        />
        <Carousel itemData={topRated} title="Top 15" qtdItens={15} />
      </div>
    </>
  );
};

export default Home;
