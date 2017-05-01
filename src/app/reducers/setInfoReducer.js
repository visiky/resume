// author：kasmine
// [Reducer 的最佳实践](http://www.jianshu.com/p/938f8121ba0f)
// 几个注意点： createReducer should be pure function,每一个函数只实现一个功能


import { ActionTypes} from '../constants/actionTypes';
import { isArray, isObject } from '../utils/filter';


// /**
//  * Reducer 生成器
//  * 
//  * @param {object|array} initialState 
//  * @param {string} payload 
//  * @returns 
//  */
// function createReducer(initialState,payload){
    
//     if(isArray(initialState)){
//         // 两种情况：操作当前项 && 新添一项 判断action.type
//         // 则此时 action[payload] 是state 中的一项
//         return (state = initialState,action)=>{
//             const actionType = action.type;
//             if(/NEW/.test(actionType)){
//                 // 新添操作                
//                 return [...state,null];
//             }else{
//                 // 修改操作
//                 var nextStateItem = action[payload],
//                     prevStateItem = state[state.length-1];
//                 if(!nextStateItem||prevStateItem===nextStateItem) return state;
//                 // 修改state的最后一项，不是简单的替换，判断 action[payload]是否为对象
//                 if(isObject(action[payload])){
//                     nextStateItem = {...prevStateItem,...nextStateItem};
//                 }
//                 // 注意不要使用 splice 修改原变量 state 
//                 return [...state.slice(0,-1),nextStateItem];
//             }
//         }
//     }  
//     return (state = initialState,action)=>{
//         // 这里可以根据action.type 进行变换
//         // 当发起的action错误时，不执行 TODO:? initialState 不可以返回 undefined
//         if(!ActionTypes.hasOwnProperty(action.type)) return state;        
//         if(!action[payload]||state===action[payload]) return state; 
//         // 重写 state，覆盖相同属性
//         return {...state,...action[payload]}
//     }
// }




// // 导出的是 slice reducer
// export const basicInfo = createReducer({},'basicInfo');
// export const experiences = createReducer([],'experiences');
// export const skills = createReducer([],'skills');
// export const appraisals = createReducer([],'appraisals'); 


// 减少ruducer样板代码
function createReducer(initialState, handlers) {
    return (state = initialState, action) => {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        } else {
            return state
        }
    }
}



const setBasicInfo = (state,action) =>{
    console.dir(state)
    // if(!action[payload]||state===action[payload]) return state; 
    // 重写 state，覆盖相同属性
    let basicInfo = {...state,...action[payload]};
    return basicInfo;
}

const setExperience = (state,action) =>{
    console.dir(state)
    // if(!action[payload]||state===action[payload]) return state; 
    // 重写 state，覆盖相同属性
    var nextStateItem = action[payload],
        prevStateItem = state[state.length-1];
    if(!nextStateItem||prevStateItem===nextStateItem) return state;
    // 修改state的最后一项，不是简单的替换，判断 action[payload]是否为对象
    if(isObject(action[payload])){
        nextStateItem = {...prevStateItem,...nextStateItem};
    }
    // 注意不要使用 splice 修改原变量 state 
    let experiences = [...state.slice(0,-1),nextStateItem];
    return experiences;
}

const setSkill = (state,action) =>{
    console.dir(state)
    // if(!action[payload]||state===action[payload]) return state; 
    // 重写 state，覆盖相同属性
    var nextStateItem = action[payload],
        prevStateItem = state[state.length-1];
    if(!nextStateItem||prevStateItem===nextStateItem) return state;
    // 修改state的最后一项，不是简单的替换，判断 action[payload]是否为对象
    if(isObject(action[payload])){
        nextStateItem = {...prevStateItem,...nextStateItem};
    }
    // 注意不要使用 splice 修改原变量 state 
    let skills = [...state.slice(0,-1),nextStateItem];
    return skills;
}

const setAppraisal = (state,action) =>{
    console.dir(state)
    // if(!action[payload]||state===action[payload]) return state; 
    // 重写 state，覆盖相同属性
    var nextStateItem = action[payload],
        prevStateItem = state[state.length-1];
    if(!nextStateItem||prevStateItem===nextStateItem) return state;
    // 修改state的最后一项，不是简单的替换，判断 action[payload]是否为对象
    if(isObject(action[payload])){
        nextStateItem = {...prevStateItem,...nextStateItem};
    }
    // 注意不要使用 splice 修改原变量 state 
    let appraisals = [...state.slice(0,-1),nextStateItem];
    return appraisals;
}

const initialState = {
    basicInfo: {},
    experiences: [],
    skills: [],
    appraisals: []
};

const resumeInfo = createReducer(initialState, {
    'SET_BASIC_INFO': setBasicInfo,
    'SET_EXPERIENCE': setExperience,
    'SET_SKILL': setSkill,
    'SET_APPRAISAL': setAppraisal
});

export default resumeInfo;