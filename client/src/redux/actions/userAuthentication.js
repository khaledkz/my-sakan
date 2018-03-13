import store from '../store/store';

let UserAthentication ={
    
    SuccessAuthen:(user)=>{
        store.dispatch({type:'Success_Authe',user});
    },
    FaildAuthen:(user)=>{
        store.dispatch({type:'Faild_Authe',user});
    },
    ResetAuthen:(user)=>{
        store.dispatch({type:'Reset_Authe'});
    }
    
     
}

export default UserAthentication;