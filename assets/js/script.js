var searchInput = document.getElementById("search-input")
var searchButton = document.getElementById("search-btn")
var image = document.getElementById("image")
var aboutMovie = document.getElementById("aboutMovie")
var titleH3 = document.getElementById("movie-t")
var info = document.getElementById("info")
var moviesDisplay = document.getElementById("repeat-movie")
var ratingMovie = document.getElementById("rating")
var favoriteMovie = document.getElementById("favoriteTag")
var historyArray = JSON.parse(localStorage.getItem("history")) || []

async function searchMovie(){
    var movie = searchInput.value
    const url = `https://imdb146.p.rapidapi.com/v1/find/?query=${movie}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3769f18ce9mshc4905c5b91696b2p16c85ejsnadaefda5f6b2',
		'X-RapidAPI-Host': 'imdb146.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const data = await response.json();
	console.log(data);
    image.src = data.titleResults.results[0].titlePosterImageModel.url
	titleH3.innerHTML = `<h3>${data.titleResults.results[0].titleNameText}</h3>`

	
	
    
    searchTitle(data)
	
} catch (error) {
	console.error(error);

    
}
}

async function searchTitle(data){
    const id = data.titleResults.results[0].id
    const url = `https://imdb146.p.rapidapi.com/v1/title/?id=${id}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3769f18ce9mshc4905c5b91696b2p16c85ejsnadaefda5f6b2',
		'X-RapidAPI-Host': 'imdb146.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const data = await response.json();
	console.log(data);
	aboutMovie.innerHTML = `<p>${data.plot.plotText.plainText}</p>`
	ratingMovie.innerHTML = `<p><strong>Rank: </storng>  <text class="color">${data.meterRanking.currentRank}</text></p>`
	

	
    
} catch (error) {
	console.error(error);
}
}

async function topMoviesApi(){
	const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3769f18ce9mshc4905c5b91696b2p16c85ejsnadaefda5f6b2',
		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const data = await response.json();
	console.log(data);

	localStorage.setItem("movieData", JSON.stringify(data))

	for(var i = 0; i < 10; i++){
		var topTen = data[i]
		console.log(topTen)

		
		
		moviesDisplay.innerHTML = moviesDisplay.innerHTML + (`<div class="box" id="repeat-movie">
		<article class="media">
		<div class="media-left">
		  <figure id="img-3" class="image">
			<img src=${data[i].image} alt="Image">
		  </figure>
		</div>
		<div class="media-content">
		  <div class="content">
		  <h3><strong>${data[i].title}</strong></h3>
			<p>
			${data[i].description}
			</p>
			<br>
			<p><strong>Genre: </storng>  <text class="color">${data[i].genre[0]}</text>  </p>
			<br>
			<p><strong>Rank: </storng>  <text class="color">${data[i].id}</text>  </p>
			<br>
			<p><strong>Rating: </storng>  <text class="color">${data[i].rating}</text>  </p>
			<br>
			<p><strong>Release Year: </storng>  <text class="color">${data[i].year}</text>  </p>
			<br>
			<p><button data-id="${i}" id="favoriteTag">Favorite</button></p>
		  </div>
		</div>
	  </article>
	</div>`)
	}
	

} catch (error) {
	console.error(error);
}
}
function favorite(event){
	var movie = JSON.parse(localStorage.getItem("movieData")) || []
	var i = event.target.getAttribute("data-id")
	if(historyArray.includes(movie[i].imdbid)===false){
		historyArray.push(movie[i])
		localStorage.setItem("history", JSON.stringify(historyArray))
	}
	

	
}





moviesDisplay.addEventListener('click', favorite)



console.log(topMoviesApi())



searchButton.addEventListener("click", searchMovie)