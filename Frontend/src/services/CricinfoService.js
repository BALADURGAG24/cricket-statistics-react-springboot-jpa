import axios from 'axios';

 

const CRICINFO_API_BASE_URL = "http:localhost:8080/api/infos";

 

class CricinfoService {

 

    getCricinfos(){

        return axios.get(CRICINFO_API_BASE_URL);

    }

 

    createCricinfo(cricinfo){

        return axios.post(CRICINFO_API_BASE_URL, cricinfo);

    }

 

    getCricinfoById(cricinfoId){

        return axios.get(CRICINFO_API_BASE_URL + '/' + cricinfoId);

    }

 

    updateCricinfo(cricinfo, cricinfoId){

        return axios.put(CRICINFO_API_BASE_URL + '/' + cricinfoId, cricinfo);

    }

 

    deleteCricinfo(cricinfoId){

        return axios.delete(CRICINFO_API_BASE_URL + '/' + cricinfoId);

    }

}

 

export default new CricinfoService()