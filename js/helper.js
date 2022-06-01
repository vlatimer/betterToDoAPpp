function calculateAge(birth) { // birthday is a date
  var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
  var birthday = new Date(birth.replace(pattern, '$3-$2-$1'));
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function capitalLetter(message) {
  return message.charAt(0).toUpperCase() + message.slice(1);
}

function getStringOfTime(t) {
  let hour = t.getHours();
  hour = hour.toString().padStart(2, "0");

  let minutes = t.getMinutes();
  minutes = minutes.toString().padStart(2, "0");

  let seconds = t.getSeconds();
  seconds = seconds.toString().padStart(2, "0");

  return `${hour}:${minutes}:${seconds}`;
}

function getStringOfDate(t) {
  let date = t.getUTCDate();
  date = date.toString().padStart(2, "0");

  let month = t.getUTCMonth() + 1;
  month = month.toString().padStart(2, "0");

  let year = t.getUTCFullYear();
  year = year.toString();

  return `${date}.${month}.${year}`;
}

function getFormData(formData) {
  const obj = {};

  for (let key of formData.keys()) {
    obj[key] = formData.get(key);
  }

  return obj;
}

function addToMainArray(pers, elem) {
  const obj = {
    person: pers,
    element: elem,
  };

  mainArray.push(obj);

  return mainArray.length - 1;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function setStylesToDeletedButton(elem) {
  elem.classList.remove("workButton");
  elem.classList.add("noButton");
  elem.disabled = true;
}

function createDelTime(t) {
  return createElement("p", {
    classList: ["deletionTime"]
  }, [
    createElement("p", {}, ["Delete Time"]),

    createElement("span", {}, [`${getStringOfTime(t)} / ${getStringOfDate(t)}`])
  ]);
}