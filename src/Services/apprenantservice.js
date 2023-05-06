import Api from "../Axios/Api"
const APPRENANT_API="/apprenants"




export const fetchApprenant=async()=> {
return await Api.get(APPRENANT_API);
}
export const fetchApprenantById=async(apprenantId)=> {
return await Api.get(APPRENANT_API + '/' + apprenantId);
}
export const deleteApprenant=async(apprenantId) =>{
return await Api.delete(APPRENANT_API + '/' + apprenantId);
}
export const addApprenant=async(apprenant)=> {
return await Api.post(APPRENANT_API, apprenant);
}
export const editapprenant=(apprenant) =>{
return Api.put(APPRENANT_API + '/' + apprenant._id, apprenant);
}