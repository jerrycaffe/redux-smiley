let result = document.getElementById('face')
// get all the values to be updated from the html page
const initialState = {
  mood: ""
}

function setHappy(payload){
  return {
    type: "HAPPY",
    payload
  }
}

function reducer(state = initialState, action) {
  
  switch (action.type) {
    case 'HAPPY':
      return {
        ...state,
        mood: action.payload}
    
    case 'SAD':
      return {mood: "&#128547"}

    case 'ANGRY':
      return {mood: "&#128544"}
    case 'CONFUSED':
      return {mood: "&#128533"}

    default:
      return state;
  }

}
const store = Redux.createStore(reducer)
document.getElementById('happy')
  .addEventListener('click', () => {
   return store.dispatch(setHappy("&#128512"))
  })
document.getElementById('sad')
  .addEventListener('click', () => {
    return store.dispatch({type: 'SAD'})
  })
document.getElementById('angry')
  .addEventListener('click', () => {
    return store.dispatch({type: 'ANGRY'})
  })
document.getElementById('confused')
  .addEventListener('click', () => {
    return store.dispatch({type: 'CONFUSED'})
  })
store.subscribe(() => {

  result.innerHTML = (store.getState().mood);
})

// add event listeners to all the buttons on the UI
// set the inital state of the emoji to normal
// create an action creator
// create the reducer function to take care of all the action creator
// setup the store method
// call the subscribe method
// call the dispatch method



// console.log(store);