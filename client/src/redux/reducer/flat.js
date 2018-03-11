export default function Country(state={},action){
    switch(action.type){
        case 'Add_Flat':
            return Object.assign({},...state,{flats:action.flats});
            
        default:
            return state;
    }
    return state 
}