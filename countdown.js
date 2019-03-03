// Global variables
let refreshrate = 100;
let daytoms = 86400000;

// Main function
function setCountdown(timer, abbrev, title, end, notactive, reason, head, littlehead) {

// Looks like the user can run this script if it is accessible by the browser, so let's clear the message for no JavaScript enabled
msg(`nojavascript`, ``);

let loop = setInterval(function() {

// Get the countdown clocks to function correctly
let countdown = new Date(`${timer} GMT`).getTime();
let time = new Date().getTime();
let dist = countdown - time;

// Define units of time
let days = Math.floor(dist / (1000 * 60 * 60 * 24));
let hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((dist % (1000 * 60)) / 1000);

// Let's put what countdown it's actually referencing and when it ends
msg(`${abbrev}countdown`, `${title} Countdown`);
msg(`${abbrev}enddate`, `Initial countdown end date is at ${end}`);

// If set to true, the user will get confused.
let scramble = false;

if (scramble == true) {
message = `April Fools!`;

days = genString(randomNum(7));
hours = genString(randomNum(7));
minutes = genString(randomNum(7));
seconds = genString(randomNum(7));

msg(`${abbrev}countdown`, minutes);
msg(`${abbrev}enddate`, hours);
console.log(message);
}

// Send the timer variables to the actual browser
msg(`${abbrev}days`, days);
msg(`${abbrev}hours`, hours);
msg(`${abbrev}minutes`, minutes);
msg(`${abbrev}seconds`, seconds);

// Put the timers' colour for what is used when calling this function
let colour = `white`;
style(`${abbrev}days`, `color: ${colour}`);
style(`${abbrev}hours`, `color: ${colour}`);
style(`${abbrev}minutes`, `color: ${colour}`);
style(`${abbrev}seconds`, `color: ${colour}`);

// Actions to do when the countdown has ended.
if (dist <= 0) {
clearInterval(loop);

if (!head) head = `Countdown has now ended.`;
if (!littlehead) littlehead = `This timer will be updated soon.`;

// Reset every timer to 0, alongside a custom message
msg(`${abbrev}days`, `0`);
msg(`${abbrev}minutes`, `0`);
msg(`${abbrev}hours`, `0`);
msg(`${abbrev}seconds`, `0`);
msg(`${abbrev}countdown`, head);
msg(`${abbrev}enddate`, littlehead);
}

// If the countdown is less than 24 hours from ending
if (dist <= daytoms) {
    let colour = `red`;
style(`${abbrev}days`, `color: ${colour}`);
style(`${abbrev}hours`, `color: ${colour}`);
style(`${abbrev}minutes`, `color: ${colour}`);
style(`${abbrev}seconds`, `color: ${colour}`);
} else {
// Set the default colour for the timers
let colour = `white`;
style(`${abbrev}days`, `color: ${colour}`);
style(`${abbrev}hours`, `color: ${colour}`);
style(`${abbrev}minutes`, `color: ${colour}`);
style(`${abbrev}seconds`, `color: ${colour}`);
}

if (reason.length < 1) reason = `No reason specified.`;

// This is what happens when we disable a timer
if (notactive == true) {
msg(`${abbrev}countdown`, `<s>${title}</s> CURRENTLY DISABLED`);
msg(`${abbrev}enddate`, `Reason: ${reason}`);
msg(`${abbrev}days`, `0`);
msg(`${abbrev}minutes`, `0`);
msg(`${abbrev}hours`, `0`);
msg(`${abbrev}seconds`, `0`);
}

}, refreshrate);
}

// Changing a certain ID's HTML through this function
function msg(id, message) {
let reqid = document.getElementById(id);
return reqid.innerHTML = message;
}

// Changing a certain ID's style through this function
function style(id, style) {
let reqid = document.getElementById(id);
return reqid.style = style;
}
