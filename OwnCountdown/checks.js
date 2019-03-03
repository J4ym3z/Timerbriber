// Global variables
let headermsg = `The custom countdown has now ended.`;
let descmsg = `Either refresh the page or click the below button to make a new countdown.`;

// Looks like the user can run this script if it is accessible by the browser, so let's clear the message for no JavaScript enabled
function onload() {
msg(`nojavascript`, ``);
}

// Set the countdown
function process() {

// Clear notice
msg(`notice`, ``);

// We need to make sure the user doesn't mess it up purposely or accidently.
let dateyear = document.getElementById('dateyear').value.trim();
let title = document.getElementById('title').value.trim();
let hhmmss = document.getElementById('hhmmss').value.trim();
let header = document.getElementById('header').value.trim();
let description = document.getElementById('description').value.trim();

if (dateyear.length <= 0) return msg(`errormessage`, 'You need to enter something for the date and year!');
if (title.length <= 0) return msg(`errormessage`, 'You need to enter something for the title!');
if (hhmmss.length <= 0) return msg(`errormessage`, 'You need to enter something for the time format!');
if (title.length > 50) return msg(`errormessage`, 'Tryna bypass the > 50 character filter? Nice try.');
if (dateyear.length > 12) return msg(`errormessage`, 'Tryna bypass the > 12 character filter? Nice try.');
if (hhmmss.length > 8) return msg(`errormessage`, 'Tryna bypass the > 8 character filter? Nice try.');
if (header.length > 40) return msg(`errormessage`, 'Tryna bypass the > 40 character filter? Nice try.');
if (description.length > 100) return msg(`errormessage`, 'Tryna bypass the > 100 character filter? Nice try.');
if (header.length < 1) header = headermsg;
if (description.length < 1) description = descmsg;

// If the user is HOPEFULLY safe, do the magic.
msg(`errormessage`, ``);
setowncountdown(dateyear, title, hhmmss, header, description);

// Hide forms
style(`userform`, `display: none`);
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
