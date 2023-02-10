const clock = document.querySelector(".clock");
const date = document.querySelector(".date");
const alarms = document.querySelector(".alarm-list");
const form = document.querySelector(".form");
const hourInput = document.querySelector(".form__input--hour");
const minuteInput = document.querySelector(".form__input--minute");
const secInput = document.querySelector(".form__input--second");
const alarmList = document.querySelector(".alarm-list");
const alarmName = document.querySelector(".alarmName");
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
class Alarm {
  constructor(id, hour, minute, sec, alarmTime, currTime, alarmName) {
    this.id = id;
    this.hour = hour;
    this.minute = minute;
    this.sec = sec;
    this.alarmTime = alarmTime;
    this.currTime = currTime;
    this.alarmName = alarmName;
  }
  _isTime(alarm) {
    if (
      this.hour === alarm.hour &&
      this.minute === alarm.minute &&
      this.sec === alarm.sec
    )
      return true;
    return false;
  }
}
class App {
  #today;
  #alarms = [];
  constructor() {
    this._getLocalStorage();
    this._startTime();
    alarmList.addEventListener("click", this._closeAlarm.bind(this));
    form.addEventListener("submit", this._newAlarm.bind(this));
    this._showDays();
    this._getDate();
  }
  _checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  _startTime() {
    let t;
    this.#today = new Date();
    let hour = this.#today.getHours() - 12;
    let minutes = this.#today.getMinutes();
    let sec = this.#today.getSeconds();
    minutes = this._checkTime(minutes);
    sec = this._checkTime(sec);
    clock.innerHTML = hour + ":" + minutes + ":" + sec;
    t = setTimeout(() => {
      this.#alarms.forEach((alarm) => {
        if (
          hour == alarm.alarmTime.h &&
          minutes == alarm.alarmTime.m &&
          sec == alarm.alarmTime.s
        ) {
          alert(`timer ${alarm.alarmName}`);
          this._deleteAlarm(alarm.id);
        }
      });

      this._startTime();
    }, 500);
  }
  _getDate() {
    this.#today = new Date();
    console.log(days[this.#today.getDay()]);
    document
      .querySelector(`[data-id="${this.#today.getDay()}"]`)
      .classList.add("today");
  }
  _showDays() {
    let html;
    days.forEach((day, index) => {
      html = `
        <span data-id=${index} class="day">
        ${day}
        </span>
        `;
      date.insertAdjacentHTML("afterbegin", html);
    });
  }
  _renderAlarm(alarm) {
    let html;
    html = `
    <div class="alarm-container"data-id=${alarm.id}>
    <li class="list-group-alarm alarm" >
      <div class="alarm-item">
        <div class="alarm__text">${alarm.hour} <span class="alarm__text__span">H</span></div>
        <div class="alarm__text">${alarm.minute} <span class="alarm__text__span">M</span></div>
        <div class="alarm__text">${alarm.sec}  <span class="alarm__text__span">S</span></div>
      </div>
      <span class="alarm__name">${alarm.alarmName}</span>
    </li>
    <span class="alarm-btn" id="close"><img class="close" src="./assets/close.svg"/></span>
    </div>
    `;
    alarms.insertAdjacentHTML("afterbegin", html);
  }

  _newAlarm(e) {
    const allPositive = (...inputs) => inputs.every((inp) => inp >= 0);
    e.preventDefault();

    // get data
    let hour = +hourInput.value;
    let minute = +minuteInput.value;
    let second = +secInput.value;
    let alarm__Name = alarmName.value;
    let currTime;
    let alarm;
    // check valid
    if (!allPositive(hour, minute, second)) {
      return alert("inputs have to be positive number");
    }
    currTime = {
      hour: new Date().getHours() - 12,
      min: new Date().getMinutes(),
      sec: new Date().getSeconds(),
    };
    let alarmTime = {
      h: hour + currTime.hour,
      m: minute + currTime.min,
      s: second + currTime.sec,
    };
    if (alarmTime.s >= 60) {
      alarmTime.s = (second + currTime.sec) % 60;
      alarmTime.m = alarmTime.m + 1;
    }
    if (alarmTime.m >= 60) {
      alarmTime.m = (minute + currTime.min) % 60;
      console.log((minute + currTime.min) % 60);
      console.log(Math.floor(minute + currTime.min / 60));
      alarmTime.h = alarmTime.h + 1;
    }
    alarm = new Alarm(
      (Date.now() + "").slice(-10),
      hour,
      minute,
      second,
      alarmTime,
      currTime,
      alarm__Name
    );
    this.#alarms.push(alarm);
    console.log(this.#alarms);
    this._renderAlarm(alarm);
    this._setLocalStorage();
    // clear input
    hourInput.value = minuteInput.value = secInput.value = 0;
    alarmName.value = "";
  }
  _setLocalStorage = () => {
    localStorage.setItem("alarms", JSON.stringify(this.#alarms));
  };
  _getLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("alarms"));
    if (!data) return;
    this.#alarms = data;
    this.#alarms.forEach((a) => {
      this._renderAlarm(a);
    });
  };
  _closeAlarm(e) {
    if (e.target.classList.contains("close")) {
      const alarmId = e.target.parentElement.parentElement.dataset.id;
      this._deleteAlarm(alarmId);
    }
  }
  _deleteAlarm(alarmId) {
    this.#alarms = this.#alarms.filter((a) => a.id != alarmId);
    this._setLocalStorage();
    document.querySelector(`[data-id="${alarmId}"]`).remove();
  }
}

const app = new App();
