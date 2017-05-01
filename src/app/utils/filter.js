

export const isArray = (obj) =>{
    if(Array.isArray){
        return Array.isArray(obj);
    }
    return Object.prototype.toString.call(obj)==='[object Array]';
}

export const isObject = (obj) =>{    
    return Object.prototype.toString.call(obj)==='[object Object]';
}

const TOOLS = {
    isArray: isArray,
    isObject: isObject
}
export default TOOLS;