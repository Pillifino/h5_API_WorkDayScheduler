//Global Variables
var timeDisplayEl = document.querySelectorAll('#time-display'); // Variable used for displaying time
var saveButton = document.querySelectorAll('#save-event')
var eventBox = document.querySelectorAll('#event-box')
var addedEvent = document.querySelectorAll('#') //Variable used in add event function
//Local storage Variable
var eventInput = localStorage.getItem('#eventInput') // typed event the will become added event output

//Functions
//Displays Past Time (Gray)
function displayPastTime() {
    var pastHours = moment().startOf('hour').fromNow(); // X Hours Ago
    timeDisplayEl.text(pastHours);
}

//Displays Present Time (Red)
function displayPresentTime() {
    var currentDay = moment().format('dddd MMM Do') //daay of the week , month , and day
    timeDisplayEl.text(currentDay)
}

//Displays Future Time (Green)
function displayFutureTime() {
    var futureHour = moment().endOf('day').fromNow(); // In X Hours
    timeDisplayEl.text(futureHour)
}

//Usert Types event
function typedEvent(){
    //Insert Function Here 
}

//Save Typed in Event
function saveEvent(){
    addedEvent.textcontent = eventInput;
    localStorage.setItem("eventInput", eventInput);
}

//Event Listeners
//Add Event By clicking On Time Block
eventBox.addEventListener('click', function(){
    typedEvent();
})
//Save Event By Clicking On Save Icon (Add To Local Storage)
saveButton.addEventListener('click', function(){
    saveEvent();
})