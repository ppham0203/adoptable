var request = require("request");
var cheerio = require("cheerio");
// const pet = require("./../models/newpet.js");
const pet = require("./../models/newpet.js");


request("http://www.petango.com/shelter_pets?shelterId=675&speciesId=1", function (error, response, html) {
  // Then, we load that into cheerio and save it to $ for a shorthand selector
  var $ = cheerio.load(html);
  // Now, we grab every h2 within an article tag, and do the following:

  $("div.animal-template").each(function (i, element) {
    // Save an empty result object
    var result = {};

    result.image = $(element).find("a").find("img").attr("src");
    result.link = $(element).find("a").attr("href");
    var name = $("ul").children("animal-name").text();
    console.log(name);

    // Add the text and href of every link, and save them as properties of the result object

    // console.log(imgLink);
    // console.log(result.title);
    // Using our Article model, create a new entry
    // This effectively passes the result object to the entry (and the title and link)
    // var entry = new pet(result);
    // console.log(entry);
  });
});