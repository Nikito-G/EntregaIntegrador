import { ADDFAVORITE, DELETEFAVORITE } from "./types"
// Actions creators
export function addFavorite(objCharacter){
    return {type: ADDFAVORITE, payload: objCharacter}
}

export function deleteFavorite(id){
    return {type: DELETEFAVORITE, payload: id}
}

