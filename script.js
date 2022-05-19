// Function that displays current time to top of page
function displayTime() {
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
  for(let box in dataValues){
   timeColorDisplay(dataValues[box])
 }
}
setInterval(displayTime, 1000);

// Display Current Time on the Page
var currentDay = moment();
console.log(currentDay);

// Grabbing the input values from User
let dataEntry = $(".col-10 border");

// Display colors based on time of activities 
function timeColorDisplay(time) {
  console.log(time)
  // Gather all the elements that contain data-hour attribute
  let timeValues = Number(time.data('hour'));
  let currentTime = moment().format("HH")
  currentTime = currentTime + "00"
  console.log(timeValues)
  console.log(currentTime)
  console.log(timeValues < currentTime)
  if (timeValues < currentTime) {
    time.addClass("past");
} else if (timeValues > currentTime) {
    time.addClass("future");
} else {
    time.addClass("present");
}}

// Creating an object to hold the value of events
let dataValues = {
  h9: $("#nine"),
  h10: $("#ten"),
  h11: $("#eleven"),
  h12: $("#twelve"),
  h13: $("#one"),
  h14: $("#two"),
  h15: $("#three"),
  h16: $("#four"),
  h17: $("#five")
}

// Creating a function to set the local data
function saveData(event) {
  console.log($(this).siblings("textarea").val())
  var input = $(this).siblings("textarea").val()
  var hour = $(this).siblings("textarea").attr("id")
  localStorage.setItem(hour, input);
}

// Turns local data into an object
let storedData = JSON.parse(localStorage.getItem("dataValues"));
console.log(storedData);

// The save button save the contents of the page
$(".saveButton").on("click", saveData);

