export const isArray = (obj) => {
  if (Array.isArray) {
    return Array.isArray(obj)
  }
  return Object.prototype.toString.call(obj) === '[object Array]'
}

export const isObject = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export const isString = (obj) => {
  return Object.prototype.toString.call(obj) === '[object String]'
}

const TOOLS = {
  isArray: isArray,
  isObject: isObject,
}
export default TOOLS
