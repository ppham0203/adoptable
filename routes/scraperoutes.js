const axios = require("axios");
const router = require("express").Router();
var request = require("request");
var cheerio = require("cheerio");
// const pet = require("./../models/newpet.js");
const pet = require("./../models/newpet.js");


// A GET request to scrape the echojs website
router.get("/scrape", function(req, res) {
  
    // First, we grab the body of the html with request
    request("http://petadoption.ocpetinfo.com/Adopt/AdoptList.asp?type=Dog", function(error, response, html) {
      // Then, we load that into cheerio and save it to $ for a shorthand selector
      var $ = cheerio.load(html);
      // Now, we grab every h2 within an article tag, and do the following:
      
      $("tr.title").siblings().each(function(i, element) {
        // Save an empty result object
        var result = {};

          result.image = $(element).find("a").find("img").attr("src");
          result.link = $(element).find("a").attr("href");
          result.name = $(element).children().eq(1).text();
          result.gender = $(element).children().eq(2).text();
          result.age = $(element).children().eq(3).text();
          result.weight = $(element).children().eq(4).text();
          result.breed = $(element).children().eq(6).text();
    
    // Using our Article model, create a new entry
          // This effectively passes the result object to the entry (and the title and link)
          var entry = new pet(result);
         
        
        // Now, save that entry to the db
        entry.save(function(err, doc) {
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


    request("http://www.petango.com/shelter_pets?shelterId=675&speciesId=1", function(error, response, html) {
      // Then, we load that into cheerio and save it to $ for a shorthand selector
      var $ = cheerio.load(html);
      // Now, we grab every h2 within an article tag, and do the following:
      
      $("div.animal-template").each(function(i, element) {
        // Save an empty result object
        var result = {};

          result.image = $(element).find("a").find("img").attr("src");
          result.link = $(element).find("a").attr("href");
          result.name = $(".animal-name").text();
          
          // result.gender = $(element).children().eq(2).text();
          // result.age = $(element).children().eq(3).text();
          // result.weight = $(element).children().eq(4).text();
          // result.breed = $(element).children().eq(6).text();
    
    // Using our Article model, create a new entry
          // This effectively passes the result object to the entry (and the title and link)
    //       var entry = new pet(result);
         
        
    //     // Now, save that entry to the db
    //     entry.save(function(err, doc) {
    //       // Log any errors
    //       if (err) {
    //         console.log(err);
    //       }
    //       // Or log the doc
    //       else {
    //         console.log(doc);
    //       }
    //     });
  
      });
    });



    // Tell the browser that we finished scraping the text
    res.send("Scrape Complete");
  });
  




  module.exports = router;
  