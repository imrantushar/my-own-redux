// step
// 1. reducer --
// 2. store -- 
// 3. add subscribe
// 4. dispatch
//     a. reducer state store
//     b. call all listiners

const createStore = (reducer, init) => {
    const store = {}
    store.state = init
    store.listiners = []

    store.getState = () => store.state
    store.subscribe = (listiner) => store.listiners.push(listiner)
    store.dispatch = (action) => {
        store.state = reducer(store.state, action)
        store.listiners.forEach(listiner => listiner())
    }
    return store
}

// after use redux
const reducer = (state, action) => {
    if(action.type == 'ADD'){
        return state + action.payload
    }
    return state
}
const store = createStore(reducer, 10);
store.subscribe(() => {
    console.log(store.getState())
})
store.subscribe(() => {
    console.log(store.getState())
})
store.subscribe(() => {
    console.log(store.getState())
})


store.dispatch({
    type: 'ADD',
    payload: 10
})
