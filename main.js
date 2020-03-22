let result = document.getElementById('face')
// get all the values to be updated from the html page
const initialState = {
  mood: "NORMAL",
  payload: "I am Normal"
}
function setMood(mood, payload){
  return {
    type: mood,
    payload: payload
  }
}

function reducer(state=initialState, action) {
  
    if(action.type === 'HAPPY') {
   let mood = action.payload;
    return mood;
            }else if(action.type === 'SAD'){
              let mood = action.payload;
              return mood;
            }else if(action.type === 'ANGRY'){
              let mood = action.payload;
              return mood;
            }else if(action.type === 'CONFUSED'){
              let mood = action.payload;
              return mood;
            }
        return state;
}
const store = Redux.createStore(reducer)
document.getElementById('happy')
.addEventListener('click', ()=>{
  return store.dispatch(setMood("HAPPY", '&#128512'))
})
document.getElementById('sad')
.addEventListener('click', ()=>{
  return store.dispatch(setMood("SAD", '&#128547'))
})
document.getElementById('angry')
.addEventListener('click', ()=>{
  return store.dispatch(setMood("ANGRY", '&#128544'))
})
document.getElementById('confused')
.addEventListener('click', ()=>{
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