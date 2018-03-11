import store from '../store/store';

let FlatAction ={
    
    postFlat:(Flats)=>{
        store.dispatch({type:'Add_Flats',Flats:Flats});
    }
    
}

export default FlatAction;