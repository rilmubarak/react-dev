export function getDigimons () {
    return (dispatch, getState) => {
        fetch('https://digimon-api.vercel.app/api/digimon')
            .then((resp) => resp.json())
            .then((data) => {
                dispatch({
                    type: "SET_DIGIMONS",
                    payload: {
                        digimons: data,
                    }
                })
            })
    }
}

export function getDetail (name) {
    return (dispatch, getState) => {
        fetch(`https://digimon-api.vercel.app/api/digimon/name/${name}`)
            .then((resp) => resp.json())
            .then((data) => {
                dispatch({
                    type: "SET_DIGIMON",
                    payload: {
                        digimon: data,
                    }
                })
            })
    }
}