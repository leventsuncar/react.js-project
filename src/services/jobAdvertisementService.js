import axios from "axios"

export default class JobAdvertisementService {
    getAdvertisements() {
        return axios.get("http://localhost:8081/api/jobadvertisement/getall")
    }
    getAdvertisementById(id) {
        return axios.get("http://localhost:8081/api/jobadvertisement/getAdvertisementById?id=" + id)
    }
    getAdvertisementByPositionName(name) {
        return axios.get("http://localhost:8081/api/jobadvertisement/city?cityName=" + name)
    }
    addAdvertisement(values){
        return axios.post("http://localhost:8081/api/jobadvertisement/add", values)
    }
}