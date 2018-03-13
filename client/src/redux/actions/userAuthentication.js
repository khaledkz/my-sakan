import store from '../store/store';

let UserAthentication ={
    
    SuccessAuthen:(user)=>{
        store.dispatch({type:'Success_Authe',user});
    },
    FaildAuthen:(user)=>{
        store.dispatch({type:'Faild_Authe',user});
    }
    
    
}

export default UserAthentication;