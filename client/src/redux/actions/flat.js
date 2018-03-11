import store from '../store/store';

let FlatAction ={
    
    postFlat:(flats)=>{
        store.dispatch({type:'Add_Flat',flats:flats});
    }
    
}

export default FlatAction;