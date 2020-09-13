const initialState = {
    favorites: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FAVORITE":
            return {...state, favorites: state.favorites.concat(action.payload.newFav)};
        default:
            return state;
    }
}