
export const reducer = (state:any,action:any)=>{
    switch(action.type){
        case "navClick":
            return action.selectKeys;
        default:
            return state;
    }
}
