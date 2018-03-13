export default function UserAuthentication(state={user:{},authenticate:false},action){
    switch(action.type){
        case 'Success_Authe':
            return Object.assign({},...state,{user:action.user,authenticate:true});
        
       case 'Faild_Authe':
            return Object.assign({},...state,{user:action.user,authenticate:false});
    
        case 'Reset_Authe':
            return Object.assign({},...state,{user:{},authenticate:false});
             
        default:
            return state;
    }
    return state 
}