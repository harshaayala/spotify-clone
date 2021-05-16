export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    //Remove after finished developing
   //token:' BQAIarGT9t47VDZThHmsBZUsY5FKK-11I-qAeIBlxkl02b3rs9EVAIDMWvxG94P8KbFN1Nf9tMbubRtKqFHCXx3GZECZwf79uypDxx4Ejv-THrnz2eASYf6qN2ozLdeOSwMHHKCMmVBs4QbSh0sb_BvHTdCw-gX5apcr6AJsJbJngCL621DP'
}

export const reducer=(state,action)=>{


    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }
            case 'SET_TOKEN':
                return {
                  ...state,
                  token: action.token,
                }
          
              case 'SET_PLAYLISTS':
                return {
                  ...state,
                  playlists: action.playlists,
                }
          
              case 'SET_DISCOVER_WEEKLY':
                return {
                  ...state,
                  discover_weekly: action.discover_weekly,
                }
          
              default:
                return state
    }
}

export default reducer