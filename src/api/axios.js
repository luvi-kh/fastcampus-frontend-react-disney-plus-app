import axios from 'axios';

const instance = axios.create({
  baseURL:"https://api.themoviedb.org/3",
  params:{
    api_key: "08602ccd78c32eae57a8dcff6fa8756e",
    language: "ko-KR"
  }
})

export default instance;