function _calculateAge(birth) { // birthday is a date
  var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
  var birthday = new Date(birth.replace(pattern, '$3-$2-$1'));
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function _capitalLetter(message) {
  return message.charAt(0).toUpperCase() + message.slice(1);
}

function _getStringOfTime(t) {
  let hour = t.getHours();
  hour = hour.toString().padStart(2, "0");
  let minutes = t.getMinutes();
  minutes = minutes.toString().padStart(2, "0");
  let seconds = t.getSeconds();
  seconds = seconds.toString().padStart(2, "0");
  return hour + ":" + minutes + ":" + seconds;
}

function _getStringOfDate(t) {
  return t.getUTCDate().toString().padStart(2, "0") + "." + (t.getUTCMonth() + 1).toString().padStart(2, "0") + "." + t.getUTCFullYear().toString().padStart(2, "0");
}

function toStringEducation(bool) {
  return bool ? "Higher education" : "Secondary education";
}

function toClass(bool, first, second) {
  return bool ? first : second;
}