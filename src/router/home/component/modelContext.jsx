import React,{createContext, useReducer} from "react";

export const ModelContext = createContext(false);

const reducers = (state,action)=>{
    switch(action.type){
        case "toggleModel":
            return action.visible;
        default:
            return state;
    }
}

export const ModelComponent= (props:any)=>{
    const [visible,dispatch] = useReducer(reducers,false);
    return (
        <>
            <ModelContext.Provider value={{visible,dispatch}}>
                {props.children}
            </ModelContext.Provider>
        </>
    )
}   
export default ModelComponent;