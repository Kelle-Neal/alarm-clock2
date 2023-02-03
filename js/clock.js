
const createAlarm = document.getElementById("create-alarm");

const activeAlarm = document.getElementById("active-alarm");
const clearAlarm = document.getElementById("clear-alarm");

const alarmTime = document.getElementById("alarm-time");

const alarmConfirmContainer = document.getElementById("alarm-confirm");

const alarmConfirm = (time) => `Alarm set for time ${time}`;

const handleSetAlarm = (event) => {
    event.preventDefault();
};

// Function to check if alarm needs to be triggered
    const checkAlarm = () => {
        if (alarmTime == digitalClock) {
        alert("It's Time!!");
        }
    };

    document.forms[0].reset();
    createAlarm.style.display = "none";
    activeAlarm.style.display = "block";
    alarmConfirmContainer.innerHTML = alarmConfirm(time);

//Show clock
function digitalClock() {
    const d = new Date();
    document.getElementById("digital-clock").innerHTML = d.toLocaleTimeString();
}

    // Update time every second
setInterval(digitalClock, 1000);