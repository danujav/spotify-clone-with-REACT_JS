export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: "BQDHXRavhA1i9DAiERj77VT8cRPB0cqZuMN-zgXlXfUSnCXXdqyxUPPjdFwCafd2y21s-JVqvgZ223koKGid6SweeL3zCT5rh0s---vRJj102tRmBvRymVahmYMxtIqVhIP7arSA-sLtr2ZEoCRTMfXrW_TL3Hi-S9S2JzJcJ2WawvyLkCxr",
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER': 
            return {
                ...state,
                user: action.user
            }

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        
        default:
            return state;
    }

}

export default reducer;
