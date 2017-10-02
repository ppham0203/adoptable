const axios = require("axios");
const router = require("express").Router();
var request = require("request");
var cheerio = require("cheerio");
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

          result.image = `http://petadoption.ocpetinfo.com/Adopt/${$(element).find("a").find("img").attr("src")}`;
          result.link = `http://petadoption.ocpetinfo.com/Adopt/${$(element).find("a").attr("href")}`;
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
  


// This will get the articles we scraped from the mongoDB
router.get("/results", function(req, res) {
  // Grab every doc in the Articles array
  pet.find({}, function(error, docs) {
    // Log any errors
    if (error) {
      console.log(error);
    }
    // Or send the doc to the browser as a json object
    else {
      res.json(docs);
    }
  });
});








// // Grab an article by it's ObjectId
// app.get("/articles/:id", function(req, res) {
//   // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
//   Article.findById(req.params.id)
//   // ..and populate all of the notes associated with it
//   .populate("note")
//   // now, execute our query
//   .exec(function(error, doc) {
//     // Log any errors
//     if (error) {
//       console.log(error);
//     }
//     // Otherwise, send the doc to the browser as a json object
//     else {
//       res.json(doc);
//     }
//   });
// });


// // Create a new note or replace an existing note
// app.post("/articles/:id", function(req, res) {
//   // Create a new note and pass the req.body to the entry
//   var newNote = new Note(req.body);

//   // And save the new note the db
//   newNote.save(function(error, doc) {
//     // Log any errors
//     if (error) {
//       console.log(error);
//     }
//     // Otherwise
//     else {
//       // Use the article id to find and update it's note
//       Article.findOneAndUpdate({ "_id": req.params.id }, { "note": doc._id })
//       // Execute the above query
//       .exec(function(err, doc) {
//         // Log any errors
//         if (err) {
//           console.log(err);
//         }
//         else {
//           // Or send the document to the browser
//           res.send(doc);
//         }
//       });
//     }
//   });
// });





  module.exports = router;
  