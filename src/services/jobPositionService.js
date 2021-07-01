import axios from "axios";

export default class JobPositionService{
    getPositions(){
        return axios.get("http://localhost:8081/api/jobpositions/getall")
    }
}