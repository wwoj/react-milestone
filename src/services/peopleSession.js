// funkcje do komunikacji z Session storage
const KEY = "appData";
const getSession = ()=>{
    let sessionData = sessionStorage.getItem(KEY);
    let convertedData = JSON.parse(sessionData)
    
    return convertedData;
}

export const searchElement = (array,id)=>{
const searchItem = array.find(element=>{
    if(element.id == id)
    return element;
})
return searchItem;
}
export default getSession;
