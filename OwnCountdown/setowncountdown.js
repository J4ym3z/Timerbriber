// Set our own countdown
function setowncountdown(date, title, hhmmss, header, description) {

    setCountdown(`${date} ${hhmmss}`, `oc`, title, `${date} @ ${hhmmss}`, false, `Timer Expired`, header, description);
    document.getElementById('afteruser').style = "display: block;";
}
