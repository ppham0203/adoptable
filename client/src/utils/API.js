import axios from "axios";

export default {

  getResults: function (query) {
    return axios.get("/results", { params: { q: query } });
  },
  getPet: function (id) {
    return axios.get("/api/adoptionPets/" + id);
  },

  savePet: function (petData) {
    return axios.post("/api/adoptionPets", petData);
  },

  saveUser: function (userData) {
    return axios.post("/api/adoptionPets/signup", userData);
  },
  verifyUser: function(userData) {
    return axios.post("/api/adoptionPets/verifyInfo", userData);
    console.log(userData)
  }
};

