import store from '../store/store';

let CountryAction ={
    
    postCountries:(countries)=>{
        store.dispatch({type:'Add_Country',countries:countries});
    }
    
}

export default CountryAction;