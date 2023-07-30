import axios from "axios";
const apiUrl = 'https://api.thecatapi.com/v1/breeds'; 

export function fetchBreeds() {
    axios.defaults.headers.common["x-api-key"] = "live_QizwG36WpcJn3g8MpfMLtUHPQYLKvggVkcmarBeXGmgXp17Vzihd9AFNXfBzcDUY"; 
  return axios.get(apiUrl).then(response => {
      console.log(response)
    return response;
  });
}

export function fetchCatByBreed(breedId) {
    axios.defaults.headers.common["x-api-key"] = "live_QizwG36WpcJn3g8MpfMLtUHPQYLKvggVkcmarBeXGmgXp17Vzihd9AFNXfBzcDUY"; 
    const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
    return axios.get(url).then(response => {
      return response.data;
    });
  }
