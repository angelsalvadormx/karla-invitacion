const ELEMENT_DAYS = document.getElementById('days');
const ELEMENT_HOURS = document.getElementById('hours');
const ELEMENT_MINUTES = document.getElementById('minutes');
const ELEMENT_SECOUNDS = document.getElementById('seconds');

const countdown = () => {
  let end = getEventDate();
  let _second = 1000;
  let _minute = _second * 60;
  let _hour = _minute * 60;
  let _day = _hour * 24;
  let timer;

  let now = new Date();
  let distance = end - now;
  if (distance < 0) {

    clearInterval(timer);
    // document.getElementById('countdown').innerHTML = 'EXPIRED!';

    return;
  }
  let days = Math.floor(distance / _day).toString();
  let hours = Math.floor((distance % _day) / _hour).toString();
  let minutes = Math.floor((distance % _hour) / _minute).toString();
  let seconds = Math.floor((distance % _minute) / _second).toString();
  days = days.length == 1 ? "0"+days : days
  hours = hours.length == 1 ? "0"+hours : hours;
  minutes = minutes.length == 1 ? "0"+minutes : minutes;
  seconds = seconds.length == 1 ? "0"+seconds : seconds;
  updateData(days, hours, minutes, seconds);
}

const getEventDate = () => {
  return new Date('05/25/2023 08:00 PM');
}

const updateData = (days, hours, minutes, seconds) => {
  ELEMENT_DAYS.innerText = days;
  ELEMENT_HOURS.innerText = hours;
  ELEMENT_MINUTES.innerText = minutes;
  ELEMENT_SECOUNDS.innerText = seconds;
}
const timer = setInterval(countdown, 1000);

