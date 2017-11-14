const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://fooby.ch/hawaii_search.sri?query=vegetarisch&lang=de&treffertyp=rezepte&start=0&num=1').then(response => {
    response.data.results.forEach( recipe => {
        let url = recipe.url;
        axios.get(url).then(response => {
            let $ = cheerio.load(response.data);
            console.log($('[data-portion-calculator-initial-all-ingredients]').data().portionCalculatorInitialAllIngredients);
        });
    })
});