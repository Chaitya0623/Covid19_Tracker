console.log("Hello")

// Copy-Pasted code snippet given on the site
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd9f8742614mshdcef150497b107ep19eafejsn8d8c51e22516',
		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
	}
};

countries = [];
cases = [];
recovered = [];
deaths = [];
fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response.countries_stat);
		  for (let i = 0; i < 288; i++){
			countries.push(response.countries_stat[i].country_name);
			cases.push(response.countries_stat[i].cases);
			recovered.push(response.countries_stat[i].total_recovered);
			deaths.push(response.countries_stat[i].deaths);
		  }
	})
	.catch(err => console.error(err));

// Setting Variable Names
var countryName = document.getElementById('country-name');
var numCases = document.getElementById('numCases');
var numRecovered = document.getElementById('numRecovered');
var numDeaths = document.getElementById('numDeaths');

// Using Functions
function checkName(){
    var name = countryName.value;
	for(let i = 0; i < 288; i++){
		if(name == countries[i]){
			numCases.innerHTML = `${cases[i]}`;
			numRecovered.innerHTML = `${recovered[i]}`;
			numDeaths.innerHTML = `${deaths[i]}`;
		}
	}
}