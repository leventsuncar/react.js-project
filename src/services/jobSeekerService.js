import axios from "axios"

export default class JobSeekerService{
getJobSeekers(){
    return axios.get("http://localhost:8081/api/jobseekers/getall")
}
}