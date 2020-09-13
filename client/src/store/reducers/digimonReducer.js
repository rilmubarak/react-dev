const initialStore = {
    digimons: [],
    digimon: null
};

export default (state = initialStore, action) => {
    switch (action.type) {
        case "SET_DIGIMONS":
            return {...state, digimons: action.payload.digimons}
        case "SET_DIGIMON":
            return {...state, digimon: action.payload.digimon}
        default:
            return state;
    }
}