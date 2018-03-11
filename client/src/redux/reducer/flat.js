export default function Country(state={},action){
    switch(action.type){
        case 'Add_Flat':
            return Object.assign({},...state,{flats:action.flats});
        
        case 'Single_Flat':
            return Object.assign({},...state,{SingleFlat:action.SingleFlat});
            
        default:
            return state;
    }
    return state 
}