import axios from "axios"
export const GET_AUTORS = "GET_AUTORS"

export const getAutors = () => {
    return async function (dispatch) {
        const apiData = await axios.get("http://localhost:3002/data/autores/");
        const autors = apiData.data;
        dispatch({ type: GET_AUTORS, payload: autors });//... este info va al reducer
        
    };
};