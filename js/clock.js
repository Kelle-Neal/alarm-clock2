//Show clock
function currentTime() {
    const d = new Date();
    document.getElementById("current-time").innerHTML = d.toLocaleTimeString();
}
// Update time every second
setInterval(currentTime, 1000);

const createAlarm = document.querySelector("create-alarm");

const alarmTime = document.getElementById("alarm-time");

const activeAlarm = document.getElementById("active-alarm");

const clearAlarm = document.getElementById("clear-alarm");


const alarmConfirmContainer = document.getElementById("alarm-confirm");
const alarmConfirm = (time) => `Alarm set for time ${time}`;

const handleSubmit = (event) => {
    function setAlarm() {
        document.getElementById("setAlarm").submit();
        createAlarm.style.display = "none";
        activeAlarm.style.display = "block";
        alarmConfirmContainer.style.display = "block";
    }


    /*
    event.preventDefault();
    alarmTime.document.forms[0].reset();
    createAlarm.style.display = "none";
    activeAlarm.style.display = "block";
    alarmConfirmContainer.innerHTML = alarmConfirm(alarmTime);
};*/

const handleClear = () => {
    alarmTime = "";
    activeAlarm.style.display = "none";
    createAlarm.style.display = "block";
};

clearAlarm.addEventListener("click", handleClear);
document.forms[0].addEventListener("submit", handleSubmit);

//See if clock = alarm
const checkAlarm = (currentTime) => {
    if (alarmTime == currentTime) {
        alert("It's Time!!");
    }
};

//Show clock
function currentTime() {
    const d = new Date();
    document.getElementById("current-time").innerHTML = d.toLocaleTimeString();
}
// Update time every second
setInterval(currentTime, 1000);
