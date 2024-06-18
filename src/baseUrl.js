import axios from "axios"

// create an instance for base url
const instance=axios.create({
    baseURL: "https://api.themoviedb.org/3"
})
export default instance