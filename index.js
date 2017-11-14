const request = require('request');
const cheerio = require('cheerio')

request('https://fooby.ch/hawaii_search.sri?query=vegetarisch&lang=de&treffertyp=rezepte&start=0&num=2000', { json: true }, (err, res, body) => {
	if (err) { return console.log(err); }

	body.results.forEach( recipe => {
		let url = recipe.url;
		request(url, (err, res, body) => {
			let $ = cheerio.load(body);
			console.log($('[data-portion-calculator-initial-all-ingredients]').data().portionCalculatorInitialAllIngredients);
		});
	})
});