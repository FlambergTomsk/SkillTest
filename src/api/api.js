import axios from 'axios';



const instance = axios.create({

  baseURL: `https://swapi.dev/api/people/`
})



export const HomePageAPI = {
  getHeroes(currentPage = 1, searchValue='') {
    return instance.get(`?search=${searchValue}&page=${currentPage}`)
    .then(response => {
      return response.data;
    })
}
}



  
 
  


 