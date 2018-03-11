import store from '../store/store';

let FlatAction ={
    
    postSingleFlat:(flat)=>{
        store.dispatch({type:'Single_Flat',SingleFlat});
    }
    
}

export default FlatAction;