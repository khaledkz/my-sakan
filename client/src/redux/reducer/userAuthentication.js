export default function UserAuthentication(state={},action){
    switch(action.type){
        case 'Success_Authe':
            return Object.assign({},...state,{user:action.user});
        
       case 'Faild_Authe':
            return Object.assign({},...state,{user:action.user});
          
        default:
            return state;
    }
    return state 
}