const axios = require('axios');
const apiUrl = process.env.REACT_APP_API_URI || 'http://localhost:4000';

const ApiClient={

    GetCountries:()=>{
        return axios.get(`${apiUrl}/api/countries/all`)
    },
    GetFlatsRelatedToCountryAndRentOrSale:(country,rentOrSale)=>{
        return axios.get(`${apiUrl}/api/flat/${country}/${rentOrSale}`)
    }
}

export default ApiClient;