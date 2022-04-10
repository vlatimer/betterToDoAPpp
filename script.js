const listDiv = document.querySelector("#listDiv");
var mainObject = [];
class NewPerson {
  constructor(n, s, d, e, x) {
    this.name = n;
    this.surname = s;
    this.date = d;
    this.education = e;
    this.sex = x;
    let data = new Date();
    this.creatingDate(data);
  }
  createObject() {
    this.mainPerson = {
      name: this.name,
      surname: this.surname,
      date: this.date,
      education: this.education,
      sex: this.sex,
      Time: {
        createD: this.createDate,
        createT: this.createTime,
        deleteD: this.deleteDate,
        deleteT: this.deleteTime,
      },
      classe: this
    }
    mainObject.push(this.mainPerson);
    console.log(mainObject);
    this.newDivElement.id = mainObject.indexOf(this.mainPerson);
  }
  addingAllElementsToListOfDiv() {
    this.newDivElement.prepend(this.buttonForDeley);
    this.newOthersElement.prepend(this.sexElement);
    this.newOthersElement.prepend(this.educatedElement);
    this.newDivElement.prepend(this.newOthersElement);
    this.newDivElement.prepend(this.newDeletonElement);
    this.newDivElement.prepend(this.newTimeElement);
    this.newDivElement.prepend(this.newBirthElement);
    this.newDivElement.prepend(this.newPElement);
    listDiv.prepend(this.newDivElement);
  }
  fillingElementsWithContent() {
    this.newPElement.innerHTML = `<p>${this.name}</p> <p>${this.surname}</p>`;
    this.newBirthElement.innerHTML = `Age: ${this.createDate.slice(6) - +this.date.slice(6)}`;
    this.newTimeElement.innerHTML = `<p>Create Time</p><span>${this.createDate} / ${this.createTime}</span>`;
    this.educatedElement.innerHTML = this.education ? "Higher education" : "Secondary education";
    this.educatedElement.classList.add(`${this.education ? "high" : "low"}`);
    this.sexElement.innerHTML = this.sex ? "Man" : "Woman";
    this.sexElement.classList.add(`${this.sex ? "man" : "woman"}`);

  }
  makingMainDivWithElementsAndSimpleCSSClasses() {
    // main div
    this.newDivElement = document.createElement("div");
    this.newDivElement.classList.add("newElemenet");
    //p for name / surname
    this.newPElement = document.createElement("p");
    this.newPElement.classList.add("names");
    //p for birth day
    this.newBirthElement = document.createElement("p");
    this.newBirthElement.classList.add("birthday");
    //p for creation time
    this.newTimeElement = document.createElement("p");
    this.newTimeElement.classList.add("creationTime");
    //p for deletion time
    this.newDeletonElement = document.createElement("p");
    this.newDeletonElement.classList.add("deletiontime");
    //div for other elements
    this.newOthersElement = document.createElement("div");
    this.newOthersElement.classList.add("othersElements");
    //p for education element
    this.educatedElement = document.createElement("p");
    this.educatedElement.classList.add("educatedElement");
    //p for sex element
    this.sexElement = document.createElement("p");
    this.sexElement.classList.add("sexElement");
    //button for deletion
    this.buttonForDeley = document.createElement("input");
    this.buttonForDeley.type = "button";
    this.buttonForDeley.value = "Delete";
    this.buttonForDeley.onclick = function (event) {
      let idOf = event.target.closest('div').id;
      if (mainObject[idOf].Time.deleteD == undefined) {
        mainObject[idOf].classe.buttonForDeley.classList.add("noButton");
        setTimeout(function () {
          mainObject[idOf].classe.buttonForDeley.style.display = "none";
          deletePersoneAndGetTime(mainObject[idOf].classe);
        }, 1000);
      }
    };
    this.buttonForDeley.classList.add("buttonForDeley");
  }
  creatingDate(data) {
    this.createDate = getDate(data);
    this.createTime = getTime(data);
  }
  deletingDate(data) {
    this.deleteDate = getDate(data);
    this.deleteTime = getTime(data);
    this.mainPerson.Time.deleteD = this.deleteDate;
    this.mainPerson.Time.deleteT = this.deleteTime;
  }
  verifyFilling() {
    if (this.name != "" && this.surname != "" && this.date != "") {
      return true;
    }
    return false;
  }
  deletePerson() {
    this.newDeletonElement.innerHTML = `<p>Delete Time</p><span>${this.deleteDate} / ${this.deleteTime}</span>`;
  }

}

function createPerson() {
  person = new NewPerson(document.Person.personname.value,
    document.Person.personsurname.value,
    document.Person.persondate.value,
    document.Person.education.checked ? true : false,
    document.Person.sex[0].checked ? true : false);
  if (person.verifyFilling()) {
    person.makingMainDivWithElementsAndSimpleCSSClasses();
    person.fillingElementsWithContent();
    person.addingAllElementsToListOfDiv();
    person.createObject();
  }
}

function deletePersoneAndGetTime(classe) {
  date = new Date();
  classe.deletingDate(date);
  classe.deletePerson();
}

function getDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let monthZero = month.toString().length == 1 ? "0" : "";
  let dayZero = day.toString().length == 1 ? "0" : "";
  day = dayZero + day;
  month = monthZero + month;
  let create_date = `${day}.${month}.${year}`;
  return create_date;

}

function getTime(date) {
  let hours = date.getHours();
  let hoursZero = hours.toString().length == 1 ? "0" : "";
  hours = hoursZero + hours;
  let minutes = date.getMinutes();
  let minutesZero = minutes.toString().length == 1 ? "0" : "";
  minutes = minutesZero + minutes;
  let seconds = date.getSeconds();
  let secondsZero = seconds.toString().length == 1 ? "0" : "";
  seconds = secondsZero + seconds;
  let create_time = `${hours}:${minutes}:${seconds}`;
  return create_time;
}