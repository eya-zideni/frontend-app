import Api from "../Axios/Api";
const FORMATION_API = "/formations";

export const fetchFormation = async () => {
    console.log(FORMATION_API);
    return await Api.get(FORMATION_API);
}
//
export const fetchFormationById = async (formationId) => {
    return await Api.get(FORMATION_API + '/' + formationId);
}
export const deleteFormation = async (formationId) => {
    return await Api.delete(FORMATION_API + '/' + formationId);
}
export const addFormation = async (formation) => {
    return await Api.post("" + FORMATION_API, formation);
}
export const editFormation = (formation) => {
    return Api.put(FORMATION_API + '/' + formation.id, formation);
}
