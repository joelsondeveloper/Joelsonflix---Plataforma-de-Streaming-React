import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { FaStar, FaPlay, FaPlus } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";

import Carousel from "../components/Carousel";

import { getTypeMovies, getIdMovie } from "../services/tmbd";

import styles from "./Details.module.css";

const Details = () => {
  const [details, setDetails] = useState({});

  const { id, mediaType } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await getIdMovie(id, mediaType);
      setDetails(response);
    };
    fetchDetails();
  }, []);

  const formateDate = (date) => {
    return new Date(date).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  console.log(details);

  return (
    <div className={styles.details}>
      <section
        className={styles.hero_banner}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${details.backdrop_path})`,
        }}
      >
        <div className={styles.hero_banner_content}>
          <div className={styles.hero_banner_meta}>
            <span>{mediaType}</span>
            <span>
              <FaStar />
              <p>{Number(details.vote_average).toFixed(1)}/10</p>
            </span>
          </div>
          <h2>{details.title || details.name}</h2>
          <p className={styles.hero_banner_date}>
            {formateDate(
              details.release_date || formateDate(details.first_air_date)
            )}
          </p>
          <p className={styles.hero_banner_overview}>{details.overview}</p>
          <div className={styles.hero_banner_buttons}>
            <button>
              <FaPlay /> <span>Assistir Trailer</span>
            </button>
            <button>
              <FaPlus /> <span>Adicionar à Lista</span>
            </button>
          </div>
        </div>
      </section>
      <section className={styles.section_details}>
        <div className={styles.section_details_poster}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
            alt={details.title || details.name}
          />
        </div>
        <div className={styles.section_details_content}>
          <div className={styles.section_details_overview}>
            <h2>Sinopse</h2>
            <p>{details.overview}</p>
          </div>
          <div className={styles.section_details_genres}>
            <h2>Gêneros</h2>
            <ul>
              {details.genres?.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
          <div className={styles.section_details_states}>
            <div className={styles.section_details_states_row}>
              <div className={styles.section_details_states_language}>
                <h2>Idioma original</h2>
                <p>{details.original_language}</p>
              </div>
              <div className={styles.section_details_states_rating}>
                <h2>Classificação</h2>
                <p className={details.adult ? styles.red : styles.green}>
                  {details.adult ? "somente para adultos" : "Livre para todos"}
                </p>
              </div>
            </div>
            <div className={styles.section_details_states_popularity}>
              <h2>Popularidade</h2>
              <div className={styles.section_details_states_popularity_bar}>
                <div style={{ width: `${details.vote_average * 10}%` }}></div>
              </div>
              <p>{Number(details.vote_average)} pontos</p>
            </div>
          </div>
          <div className={styles.section_details_buttons}>
            <button>
              <FaPlay />
              <span>Assistir Agora</span>
            </button>
            <button>
              <FiDownload />
              <span>Download</span>
            </button>
            <button>
              <AiOutlineHeart />
            </button>
          </div>
        </div>
      </section>
      {/* <Carousel
        itemData={nowPlaying}
        title="Lançados rencentemente"
        qtdItens={15}
        isMovieAndTv={true}
      /> */}
    </div>
  );
};

export default Details;
