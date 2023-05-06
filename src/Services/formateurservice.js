import Api from "../Axios/Api";
export const FORMATEUR_API="/formateurs"


export const fetchFormateur=async()=> {
return await Api.get(FORMATEUR_API);
}
export const fetchFormateurById=async(formateurId)=> {
return await Api.get(FORMATEUR_API + '/' + formateurId);
}
export const deleteFormateur=async(formateurId) =>{
return await Api.delete(FORMATEUR_API + '/' + formateurId);
}
export const addFormateur=async(formateur)=> {
return await Api.post(""+FORMATEUR_API, formateur);
}
export const EditFormateur=(formateur) =>{
return Api.put(FORMATEUR_API + '/' + formateur._id, formateur);
}