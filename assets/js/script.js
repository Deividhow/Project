var searchInput = document.getElementById("search-input")
var searchButton = document.getElementById("search-btn")
var image = document.getElementById("image")
var description = document.getElementById("description")
var titleH3 = document.getElementById("movie-t")

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
	description.innerHTML = `<p>${data.plot.plotText.plainText}</p>`
	

	
    
} catch (error) {
	console.error(error);
}
}

async function topMoviesApi(){
	const url = 'https://imdb-top-100-movies.p.rapidapi.com/top32';
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
} catch (error) {
	console.error(error);
}
}





console.log(topMoviesApi())











searchButton.addEventListener("click", searchMovie)