import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  // getRecipes: function(query) {
  //   return axios.get("/scrape", { params: { q: query}});
  // }

  getResults: function(query) {
    return axios.get("/results", { params: { q: query}});
  },
  getPet: function(id) {
    return axios.get("/api/adoptionPets/" + id);
    console.log(id);
  },

    // Saves a book to the database
  savePet: function(petData) {
      return axios.post("/api/adoptionPets", petData);
    },

  saveUser: function(userData) {
      return axios.post("/api/adoptionPets/signup", userData);
      console.log(userData)
    }
};

