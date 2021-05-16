import React,{createContext,useContext,useReducer} from 'react';

export const Datalayercontext=createContext();

export const Datalayer=({initialState,children,reducer})=>(

    <Datalayercontext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </Datalayercontext.Provider>

)

export const useDataLayerValue=()=> useContext(Datalayercontext)