import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Carousel.module.css";



const carousel = ({ itemData, title, qtdItens, isMovieAndTv }) => {
  const [carouselTranslation, setCarouselTranslation] = useState(0);

  const navigate = useNavigate()

  const handleClick = (id, mediaType) => {
    navigate(`/${mediaType}/${id}`)
    
}

  const prevSlide = (itemWidth, gap) => {
    const width = itemWidth + gap;
    if (carouselTranslation - width >= 0)
    setCarouselTranslation((prevTranslation) => prevTranslation - width);
  };

  const nextSlide = (itemWidth, gap) => {
    const width = itemWidth + gap;
    if (carouselTranslation + width <= 3224)
      setCarouselTranslation((prevTranslation) => prevTranslation + width);
  };

  return (
    <section className={styles.section_carousel}>
      <div className={styles.carousel}>
        <h2 className={styles.carousel_title}>{title}</h2>
        <div
          className={styles.carousel_container}
          style={{ transform: `translateX(-${carouselTranslation}px)` }}
        >
          {itemData.slice(0, qtdItens).map((item) => (
            <article
              className={styles.carousel_item}
              key={item.id}
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${item.poster_path})`,
              }}
              onClick={() => handleClick(item.id, item.media_type)}
            >
              {isMovieAndTv && <p className={styles.carousel_item_type}>{item.media_type}</p>}
              <div className={styles.carousel_item_overlay}>
                <p className={styles.carousel_item_rating}>
                  <FaStar />
                  {item.vote_average.toFixed(1)}
                </p>
                <h3>{item.title || item.name}</h3>
              </div>
            </article>
          ))}
        </div>
        <FaChevronLeft
          className={styles.carousel_left}
          onClick={() => prevSlide(200, 16)}
        />
        <FaChevronRight className={styles.carousel_right} onClick={() => nextSlide(200, 16)} />
      </div>
    </section>
  );
};

export default carousel;
