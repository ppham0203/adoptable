const axios = require("axios");
const router = require("express").Router();
var request = require("request");
var cheerio = require("cheerio");
const pet = require("./../models/newpet.js");


// A GET request to scrape the OC Petinfo website
router.get("/api/scrape", function (req, res) {

  // First, we grab the body of the html with request
  request("http://petadoption.ocpetinfo.com/Adopt/AdoptList.asp?type=Dog", function (error, response, html) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(html);
    // Now, we grab every table row with a class title

    $("tr.title").siblings().each(function (i, element) {
      // Save an empty result object
      var result = {};

      result.image = `http://petadoption.ocpetinfo.com/Adopt/${$(element).find("a").find("img").attr("src")}`;
      result.link = `http://petadoption.ocpetinfo.com/Adopt/${$(element).find("a").attr("href")}`;
      result.pet_name = $(element).children().eq(1).text().trim();
      result.gender = $(element).children().eq(2).text().trim();
      result.age = $(element).children().eq(3).text().trim();
      result.weight = $(element).children().eq(4).text().trim();
      result.breed = $(element).children().eq(6).text().trim();

      // Using our newpet model, create a new entry
    
      var entry = new pet(result);

      // Now, save that entry to the db
      entry.save(function (err, doc) {
        // Log any errors
        if (err) {
          console.log(err);
        }
        // Or log the doc
        else {
          console.log(doc);
        }
      });
    });
  });
  // Tell the browser that we finished scraping the text
  res.send("Scrape Complete");
});

module.exports = router;  