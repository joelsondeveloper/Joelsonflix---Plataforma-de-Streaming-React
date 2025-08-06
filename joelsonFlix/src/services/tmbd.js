import { useNavigate } from "react-router-dom";

const API_KEY = "0744fe43cbe1efa318ca3cdb2423d53a";
const BASE_URL = "https://api.themoviedb.org/3";

// export async function getTrendingMovies() {
//     const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=pt-BR`)
//     const data = await response.json()
//     return data.results
// }

export async function getTypeMovies(url) {
  const response = await fetch(
    `${BASE_URL}${url}?api_key=${API_KEY}&language=pt-BR`
  );
  const data = await response.json();
  return data.results;
}

export async function getIdMovie(id, mediaType) {
  const response = await fetch(
    `${BASE_URL}/${mediaType}/${id}?api_key=${API_KEY}&language=pt-BR`
  );
  const data = await response.json();
  return data;
}
