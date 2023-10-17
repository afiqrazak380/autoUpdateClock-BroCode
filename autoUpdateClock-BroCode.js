// Practice Program:  Auto Update Clock

const myLabel = document.getElementById("myLabel");

update(); // return formatTime() function with doubleDigit() function
setInterval(update,1000) // run the update() function every 1000 milisecond (1 sec)

function update(){

  let date = new Date();
  myLabel.innerHTML = formatTime(date);

  function formatTime(date){ // format time by calling the date variable
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let mili = date.getMilliseconds()
    let amOrPm = hours >= 12 ? "pm" : "am";

    hours = (hours % 12) || 12;

    hours = doubleDigits(hours);
    minutes = doubleDigits(minutes);
    seconds = doubleDigits(seconds);

    return `${hours}:${minutes}:${seconds}: ${mili} ${amOrPm}`
  }
  function doubleDigits(digit){ // add string "0" to the single digit number
    digit = digit.toString(); // convert input(digit) to string
    return digit.length < 2 ? "0" + digit : digit; // ternary argument
  }
}
