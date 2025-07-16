import { useEffect, useState, useRef } from "react";
import { getPopularMovies, getTrendingMovies } from "../services/tmbd";

import styles from "./Home.module.css";

const Home = () => {
  const containerRef = useRef(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies);
    };
    fetchTrendingMovies();
  }, []);

  const nextSlide = () => {
  setCarouselIndex((prevIndex) => {
    const nextIndex = (prevIndex + 1) % 5;

    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(-${100 * nextIndex}%)`;
      console.log("transform:", 100 * nextIndex, "index:", nextIndex);
    }

    return nextIndex;
  });
};

  // nextSlide();

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval); // limpa quando desmontar
  }, []);

  return (
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
                  Assistir Agora
                </button>
                <button className={styles["btn-secondary"]}>Ver Mais</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
