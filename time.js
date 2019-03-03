
// This lets the user's local time to be displayed and refresh every millisecond.
setInterval(() => {
    let date = new Date().toLocaleTimeString()
    document.getElementById('currenttime').innerHTML = `${date}`;
    }, 1);
    