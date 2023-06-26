async function searchMovieByName(title) {
  const apiKey = 'f4451def6af4063be4c9fa7714890787'; 
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(title)}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}
async function searchMovie() {
  const input = document.querySelector('#input');
  const inputValue = input.value;
  if (inputValue !== '') {
    cleanAllMovies();
    const movies = await searchMovieByName(inputValue);
    movies.forEach(movie => renderMovie(movie));
  }
}
const input = document.querySelector('#input');
input.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    searchMovie();
  }
});



  