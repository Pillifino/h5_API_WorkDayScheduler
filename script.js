var timeDisplayEl = document.querySelectorAll('#time-display'); // JQuery variable used for displaying time


//Functions
//Displays Past Time (Gray)
function displayPastTime() {
    var pastHours = moment().startOf('hour').fromNow(); // X Hours Ago
    timedisplayEl.text(pastHours);
}

//Displays Present Time (Red)
function displayPresentTime() {
    var currentDay = moment().format('dddd MMM Do') //daay of the week , month , and day
    timedisplayEl.text(currentDay)
}

//Displays Future Time (Green)
function displayFutureTime() {
    var futureHour = moment().endOf('day').fromNow(); // In X Hours
    timedisplayEl.text(futureHour)
}