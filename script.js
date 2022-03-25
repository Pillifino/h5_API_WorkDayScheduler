//Global Variables
var saveButton = $('#save-event')
var eventBox = $('#event-box')
// var addedEvent = document.querySelectorAll('#') //Variable used in add event function

var timeNine = document.querySelectorAll('#nine')
var timeTen = document.querySelectorAll('#ten')
var timeEleven = document.querySelectorAll('#eleven')
var timeNoon = document.querySelectorAll('#twelve')
var timeOne = document.querySelectorAll('#one')
var timeTwo = document.querySelectorAll('#two')
var timeThree = document.querySelectorAll('#three')
var timeFour = document.querySelectorAll('#four')
var timeFive = document.querySelectorAll('#five')

//Local storage Variable
var eventInput = localStorage.getItem('#eventInput'); // typed event the will become added event output

//Functions
//Displays Past Time (Gray)
// function displayPastTime() {
//     var pastHours = moment().startOf('hour').fromNow(); // X Hours Ago
//     timeDisplayEl.text(pastHours);
// }

//Displays Present Time (Red)
function displayTime() {
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a')); //Jquery selecting the current day ID in jumbotron
}
setInterval(displayTime, 1000);

//Present Time Shows As Red
$( document.body ).click(function() {
    $( "container" ).each(function( i ) {
      if (moment().format('LT')) {
        this.style.color = "";
      } else {
        this.style.color = "";
      }
    });
  });

// displayFutureTime();
//Displays Future Time (Green)
// function displayFutureTime() {
//     var futureHour = moment().endOf('day').fromNow(); // In X Hours
//     timeDisplayEl.text(futureHour);
// }

//Usert Types event
// function typedEvent(){
    //Insert Function Here 
// }

//Save Typed in Event
// function saveEvent(){
//     addedEvent.textcontent = eventInput;
//     localStorage.setItem('eventInput', eventInput);
// }

//Event Listeners
//Add Event By clicking On Time Block
// eventBox.addEventListener('click', function(){
//     typedEvent();
// })
//Save Event By Clicking On Save Icon (Add To Local Storage)
// saveButton.addEventListener('click', function(){
//     saveEvent();
// })