


Redux 提供的几个接口

```javascript
export {
  createStore,
  combineReducers,
  bindActionCreators,
  applyMiddleware,
  compose
}
```

## createStore

接受三个参数
```javascript
function createStore(reducer, preloadedState, enhancer) {

    var currentReducer = reducer
    var currentState = preloadedState  // 通过 getState() 可获取
    var currentListeners = []
    var nextListeners = currentListeners
    var isDispatching = false
}
```

常用的方法：

### getState
### dispatch(action)   
分发一个action 内部会执行相应的  reducer  => nextState 
```javascript
 try {
      isDispatching = true
      currentState = currentReducer(currentState, action)
    } finally {
      isDispatching = false
    }

    var listeners = currentListeners = nextListeners
    for (var i = 0; i < listeners.length; i++) {
      listeners[i]()
    }
```
### subscribe  

接受一个callback，订阅消息，每一次dispatch之后 会执行（👆 详看dispatch的实现，会调用内部的listeners）
```javascript
store.subscribe(() =>
  console.log(store.getState())
);
```

### 初始化状态

 dispatch({ type: ActionTypes.INIT })

## combineReducers

## applyMiddleware

```javascript
export default function applyMiddleware(...middlewares) {
  return (createStore) => (reducer, preloadedState, enhancer) => {
    var store = createStore(reducer, preloadedState, enhancer)
    var dispatch = store.dispatch
    var chain = []

    var middlewareAPI = {
      getState: store.getState,
      dispatch: (action) => dispatch(action)
    }
    chain = middlewares.map(middleware => middleware(middlewareAPI))
    dispatch = compose(...chain)(store.dispatch)

    return {
      ...store,
      dispatch
    }
  }
}
```
## bindActionCreators  

```javascript
import {bindActionCreators} from 'redux';

// 1. 
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increase: (...args) => dispatch(actions.increase(...args)),
    decrease: (...args) => dispatch(actions.decrease(...args))
  }
}

// 2. Redux 本身提供了 bindActionCreators 函数，来将 action 包装成直接可被调用的函数。
const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    increase: actions.increase,
    decrease: actions.decrease
  });
}
```
看看源码实现
```javascript
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}
function bindActionCreators(actionCreators, dispatch) {
   // 1.
    return bindActionCreator(actionCreators, dispatch);
    // 2.
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var actionCreator = actionCreators[key];
      if (typeof actionCreator === 'function') {
        boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
      }
    }
    return boundActionCreators;
}
```
##compose
