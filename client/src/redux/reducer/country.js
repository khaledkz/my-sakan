export default function Country(state={},action){
    switch(action.type){
        case 'Add_Country':
            return Object.assign({},...state,{countries:action.countries});
            
        default:
            return state;
    }
    return state 
}