let result = document.getElementById('face')
// get all the values to be updated from the html page
const initialState = {
  mood: "NORMAL",
  payload: "&#128528;"
}

function setMood(mood, payload) {
  return {
    type: mood,
    payload: payload
  }
}

function reducer(state = initialState, action) {
  let states = {
    ...state
  }
  newMod = states.mood
  let newMood = action.payload;
  switch (action.type) {
    case 'HAPPY':
      return newMood;
    case 'SAD':
      return newMood;
    case 'ANGRY':
      return newMood;
    case 'CONFUSED':
      return newMood

    default:
      return state;
  }

}
const store = Redux.createStore(reducer)
document.getElementById('happy')
  .addEventListener('click', () => {
    return store.dispatch(setMood("HAPPY", '&#128512'))
  })
document.getElementById('sad')
  .addEventListener('click', () => {
    return store.dispatch(setMood("SAD", '&#128547'))
  })
document.getElementById('angry')
  .addEventListener('click', () => {
    return store.dispatch(setMood("ANGRY", '&#128544'))
  })
document.getElementById('confused')
  .addEventListener('click', () => {
    return store.dispatch(setMood("CONFUSED", '&#128533'))
  })
store.subscribe(() => {
  result.innerHTML = (store.getState());
})

// add event listeners to all the buttons on the UI
// set the inital state of the emoji to normal
// create an action creator
// create the reducer function to take care of all the action creator
// setup the store method
// call the subscribe method
// call the dispatch method



// console.log(store);