const API_KEY = "0744fe43cbe1efa318ca3cdb2423d53a"
const BASE_URL = "https://api.themoviedb.org/3"

export async function getPopularMovies() {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`)
    const data = await response.json()
    return data.results
}

export async function getTrendingMovies() {
    const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=pt-BR`)
    const data = await response.json()
    return data.results
}