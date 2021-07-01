import axios from "axios";

export default class JobSeekerCVService {
    getCVById(id) {
        return axios.get("http://localhost:8081/api/cv/cvdetail?id=" + id)
    }
    getAll(){
        
    }
}