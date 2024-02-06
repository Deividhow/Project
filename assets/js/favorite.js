var historyArray = JSON.parse(localStorage.getItem("history")) || [];
var moviesDisplay = document.getElementById("repeat-movie");

function displayFavorites() {
    console.log("line5")
  var movieData = JSON.parse(localStorage.getItem("movieData")) || [];

  for (var i = 0; i < historyArray.length; i++) {
    var movieIndex = findMovieIndex(historyArray[i].imdbid, movieData);
    if (movieIndex !== -1) {
      var movie = movieData[movieIndex];
      moviesDisplay.innerHTML += createMovieCard(movie);
    }
  }
}

function findMovieIndex(imdbid, movieData) {
    console.log("line18")
  for (var i = 0; i < movieData.length; i++) {
    if (movieData[i].imdbid === imdbid) {
      return i;
    }
  }
  return -1;
}

function createMovieCard(movie) {
    console.log("line28")
  return `
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image">
            <img src="${movie.image}" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <h3><strong>${movie.title}</strong></h3>
            <p>${movie.description}</p>
            <br>
            <p><strong>Genre: </strong> <span class="color">${movie.genre[0]}</span></p>
            <br>
            <p><strong>Rank: </strong> <span class="color">${movie.id}</span></p>
            <br>
            <p><strong>Rating: </strong> <span class="color">${movie.rating}</span></p>
            <br>
            <p><strong>Release Year: </strong> <span class="color">${movie.year}</span></p>
          </div>
        </div>
      </article>
    </div>`;
}

displayFavorites();