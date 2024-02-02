var searchInput = document.getElementById("search-input")
var searchButton = document.getElementById("search-btn")

async function searchHotel(){
    const url = 'https://imdb146.p.rapidapi.com/v1/find/?query=brad';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3769f18ce9mshc4905c5b91696b2p16c85ejsnadaefda5f6b2',
		'X-RapidAPI-Host': 'imdb146.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);


}
}


searchButton.addEventListener("click", searchHotel)