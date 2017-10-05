const axios = require("axios");
const router = require("express").Router();
var request = require("request");
var cheerio = require("cheerio");
const pet = require("./../models/newpet.js");
const submitpet = require("./../models/petsubmission.js");
const bodyParser = require('body-parser');

// A GET request to scrape the echojs website
router.get("/api/scrape", function(req, res) {
  
    // First, we grab the body of the html with request
    request("http://petadoption.ocpetinfo.com/Adopt/AdoptList.asp?type=Dog", function(error, response, html) {
      // Then, we load that into cheerio and save it to $ for a shorthand selector
      var $ = cheerio.load(html);
      // Now, we grab every h2 within an article tag, and do the following:
      
      $("tr.title").siblings().each(function(i, element) {
        // Save an empty result object
        var result = {};

          result.image = `http://petadoption.ocpetinfo.com/Adopt/${$(element).find("a").find("img").attr("src")}`;
          result.link = `http://petadoption.ocpetinfo.com/Adopt/${$(element).find("a").attr("href")}`;
          result.name = $(element).children().eq(1).text().trim();
          result.gender = $(element).children().eq(2).text().trim();
          result.age = $(element).children().eq(3).text().trim();
          result.weight = $(element).children().eq(4).text().trim();
          result.breed = $(element).children().eq(6).text().trim();
    
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
    // Tell the browser that we finished scraping the text
    res.send("Scrape Complete");
  });
  


  // This will get the articles we scraped from the mongoDB
router.get("/results", function(req, res) {
  // Grab every doc in the Articles array
  pet.find({}, function(error, doc) {
    // Log any errors
    if (error) {
      console.log(error);
    }
    // Or send the doc to the browser as a json object
    else {
      res.json(doc);
    }
  });
 

});




// // This will get the articles we scraped from the mongoDB
// router.get("/results", function(req, res) {
//   // Grab every doc in the Articles array
//   pet.find({}, function(error, doc) {
//     // Log any errors
//     if (error) {
//       console.log(error);
//     }
//     // Or send the doc to the browser as a json object
//     else {
//       submitpet.find({}, function(error, docs) {
//         // Log any errors
//         if (error) {
//           console.log(error);
//         }
//         // Or send the doc to the browser as a json object
//         else {
//           var docs2 = doc.concat(docs);
//           res.bodyParser.json(docs2);
//         }
//       });
//     }
//   });

// });



// submitpet.find({}, function(error, docs) {
//   // Log any errors
//   if (error) {
//     console.log(error);
//   }
//   // Or send the doc to the browser as a json object
//   else {
//     res.json(docs);
//   }
// });


// router.get("/submittedresults", function(req, res) {
//   // Grab every doc in the Articles array
//   submitpet.find({}, function(error, docs) {
//     // Log any errors
//     if (error) {
//       console.log(error);
//     }
//     // Or send the doc to the browser as a json object
//     else {
//       res.json(docs);
//     }
//   });
// });



  module.exports = router;
  