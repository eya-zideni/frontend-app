import Api from "../Axios/Api";
export const COUR_API="/cours"


export const fetchCour=async()=> {
return await Api.get(COUR_API);
}


export const addCour=async(cour)=> {
return await Api.post(""+COUR_API, cour);
}
